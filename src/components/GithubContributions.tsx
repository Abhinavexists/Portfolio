'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react';

type ContributionLevel = 0 | 1 | 2 | 3 | 4;

interface ContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Abhinavexists';

const ContributionDay = React.memo(({ day, index }: { day: ContributionDay; index: string }) => {
  const getColorForLevel = useCallback((level: ContributionLevel): string => {
    return ['bg-gray-800', 'bg-green-900', 'bg-green-700', 'bg-green-500', 'bg-green-300'][level];
  }, []);

  const formatDate = useCallback((date: string): string =>
    new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), []);

  if (!day.date) {
    return <div key={index} className="w-3 h-3 rounded-sm bg-transparent" />;
  }

  return (
    <div
      key={index}
      className={`w-3 h-3 rounded-sm ${getColorForLevel(day.level)} relative group cursor-pointer`}
      title={`${formatDate(day.date)}: ${day.count} contributions`}
    >
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap pointer-events-none">
        {formatDate(day.date)}: {day.count} contributions
      </div>
    </div>
  );
});

ContributionDay.displayName = 'ContributionDay';

const GithubContributions = () => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeRange, setTimeRange] = useState<'3months' | '6months' | '1year'>('6months'); 

  const processedData = useMemo(() => {
    if (!contributions.length) return { weeks: [], isEmpty: true };

    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    const firstDay = new Date(contributions[0].date).getDay();
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push({ date: '', count: 0, level: 0 });
    }

    contributions.forEach(day => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: '', count: 0, level: 0 });
      }
      weeks.push(currentWeek);
    }

    return { weeks, isEmpty: false };
  }, [contributions]);

  useEffect(() => {
    let cancelled = false;
    
    const fetchGitHubContributions = async () => {
      if (cancelled) return;
      
      try {
        // Use a timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!res.ok) throw new Error('Failed to fetch GitHub contributions');

        const data = await res.json();
        if (!data?.contributions || !Array.isArray(data.contributions)) {
          throw new Error('Invalid API format');
        }

        if (cancelled) return;

        const allDays = data.contributions;
        const total = data.total?.lastYear || 0;
        const daysToShow = timeRange === '3months' ? 91 : timeRange === '6months' ? 182 : 365;
        const days = allDays.slice(-daysToShow);

        let streakCount = 0, currentStreak = 0;
        const processed = days.map((day: any) => {
          const count = parseInt(day.count) || 0;
          const level: ContributionLevel = Math.min(Math.max(0, day.level), 4) as ContributionLevel;
          if (count > 0) {
            currentStreak++;
            streakCount = Math.max(streakCount, currentStreak);
          } else {
            currentStreak = 0;
          }

          return { date: day.date, count, level };
        });

        setContributions(processed);
        setTotalContributions(total);
        setStreak(streakCount);
      } catch (err) {
        if (cancelled) return;
        console.error('GitHub API error:', err);
        generateMockData();
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    const generateMockData = () => {
      const today = new Date();
      const daysToShow = timeRange === '3months' ? 91 : timeRange === '6months' ? 182 : 365;
      let mock: ContributionDay[] = [], total = 0, streakCount = 0, current = 0;

      for (let i = daysToShow - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);

        const rand = Math.random();
        let level: ContributionLevel = 0, count = 0;

        if (rand > 0.6) {
          if (rand > 0.9) { level = 4; count = 15 + Math.floor(Math.random() * 10); }
          else if (rand > 0.8) { level = 3; count = 10 + Math.floor(Math.random() * 5); }
          else if (rand > 0.7) { level = 2; count = 5 + Math.floor(Math.random() * 5); }
          else { level = 1; count = 1 + Math.floor(Math.random() * 3); }
        }

        mock.push({ date: date.toISOString().split('T')[0], count, level });
        total += count;

        if (count > 0) {
          current++;
          streakCount = Math.max(streakCount, current);
        } else {
          current = 0;
        }
      }

      setContributions(mock);
      setTotalContributions(total);
      setStreak(streakCount);
    };

    const timeoutId = setTimeout(fetchGitHubContributions, 100);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [timeRange]);

  const renderWeeks = useCallback(() => {
    if (isLoading) {
      const cells = timeRange === '3months' ? 91 : timeRange === '6months' ? 182 : 365;
      return (
        <div className="grid grid-cols-13 gap-1 w-full">
          {Array.from({ length: Math.min(cells, 50) }).map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-sm bg-gray-800 animate-pulse" />
          ))}
        </div>
      );
    }

    if (processedData.isEmpty) {
      return <div className="text-gray-400 text-sm text-center py-4">No contribution data available</div>;
    }

    return (
      <div className="w-full flex justify-center">
        <div className="contributions-scroll custom-scrollbar">
          <div className="grid grid-flow-col gap-1 auto-cols-max pb-1">
            {processedData.weeks.map((week, i) => (
              <div key={i} className="grid grid-rows-7 gap-1">
                {week.map((day, j) => (
                  <ContributionDay key={`${i}-${j}`} day={day} index={`${i}-${j}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }, [isLoading, processedData, timeRange]);

  const timeRangeText = useMemo(() => ({
    '3months': 'Last 3 months',
    '6months': 'Last 6 months',
    '1year': 'Last 12 months'
  }[timeRange]), [timeRange]);

  return (
    <div className="h-full flex flex-col">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1f2937; border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(to right, #4f46e5, #3b82f6); border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: linear-gradient(to right, #6366f1, #60a5fa); }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #4f46e5 #1f2937; }
        .contributions-scroll { overflow-x: auto; overscroll-behavior-x: none; scroll-snap-type: x proximity; width: 100%; }
      `}</style>

      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-white">GitHub Contributions</h3>
          <p className="text-sm text-gray-400">{timeRangeText} of activity</p>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300"
        >
          <ExternalLinkIcon className="w-5 h-5" />
        </a>
      </div>

      <div className="flex-1">{renderWeeks()}</div>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4 h-4" />
          <span>{totalContributions} contributions</span>
        </div>
        <div>
          <span>Best streak: {streak} days</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GithubContributions);
