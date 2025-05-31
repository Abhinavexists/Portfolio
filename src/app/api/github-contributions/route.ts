import { NextResponse } from 'next/server';

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

export async function GET(request: Request) {
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Abhinavexists';

  if (!token || !username) {
    return jsonError('GitHub token or username not configured', 500);
  }

  const { searchParams } = new URL(request.url);
  const fromDate = searchParams.get('from') || getDateXDaysAgo(365);
  const toDate = searchParams.get('to') || getCurrentDate();

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection(from: "${fromDate}T00:00:00Z", to: "${toDate}T23:59:59Z") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return jsonError('Failed to fetch GitHub data', response.status);
    }

    const { data, errors } = await response.json();
    if (errors) {
      return jsonError('GitHub API error', 500, errors);
    }

    const calendar = data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      return jsonError('No contribution data found', 404);
    }

    const contributions = calendar.weeks.flatMap((week: any) =>
      week.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
        level: getLevelFromColor(day.color),
      }))
    );

    return NextResponse.json({
      username,
      totalContributions: calendar.totalContributions,
      contributions,
    });
  } catch (err) {
    return jsonError('Internal server error', 500, err);
  }
}

function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

function getDateXDaysAgo(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split('T')[0];
}

function getLevelFromColor(color: string): number {
  const lower = color.toLowerCase();
  if (lower.includes('216e39')) return 4;
  if (lower.includes('30a14e')) return 3;
  if (lower.includes('40c463')) return 2;
  if (lower.includes('9be9a8') || lower.includes('green')) return 1;
  return 0;
}

function jsonError(message: string, status: number, details?: any) {
  console.error(message, details || '');
  return NextResponse.json({ error: message, details }, { status });
}
