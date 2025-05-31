'use client';

import React, { useState } from 'react';
import { Code2, CheckCircle, XCircle } from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  initialCode: string;
  expectedOutput: string;
  hint?: string;
}

const challenges: Challenge[] = [
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis',
    description: 'Create a simple sentiment analysis function that classifies text as positive, negative, or neutral.',
    difficulty: 'Easy',
    initialCode: `function analyzeSentiment(text) {\n  // Your code here\n  // Return "positive", "negative", or "neutral"\n  \n}`,
    expectedOutput: 'positive',
    hint: 'Look for positive/negative keywords and count their occurrences.'
  },
  {
    id: 'feature-scaling',
    title: 'Feature Scaling',
    description: 'Implement min-max normalization to scale features to a range of [0,1].',
    difficulty: 'Easy',
    initialCode: `function minMaxScaling(values) {\n  // Your code here\n  // Scale the array of numbers to range [0,1]\n  \n}`,
    expectedOutput: '0, 0.25, 0.5, 0.75, 1',
    hint: 'Find the min and max values, then apply the formula: (x - min) / (max - min)'
  },
  {
    id: 'kmeans',
    title: 'K-Means Clustering',
    description: 'Implement a simple version of the k-means clustering algorithm for 2D points.',
    difficulty: 'Medium',
    initialCode: `function kMeans(points, k, iterations = 1) {\n  // Your code here\n  // Implement one iteration of k-means\n  // Return centroids as [[x1,y1], [x2,y2], ...]\n  \n}`,
    expectedOutput: '[[1.5,1.5], [5.5,5.5]]',
    hint: 'Start with random centroids, assign points to nearest centroid, then update centroids.'
  }
];

const CodingChallenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);

  const selectChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setCode(challenge.initialCode);
    setOutput('');
    setIsCorrect(null);
    setShowHint(false);
  };

  const runCode = () => {
    if (!selectedChallenge) return;
    
    try {
      // Create a safe environment to execute the code
      const sandbox = new Function(
        'return ' + code
      )();
      
      let result: string;
      
      switch (selectedChallenge.id) {
        case 'sentiment-analysis':
          result = sandbox('This is amazing and wonderful!');
          break;
        case 'feature-scaling':
          result = sandbox([1, 3, 5, 7, 9]).join(', ');
          break;
        case 'kmeans':
          const points = [[1,1], [2,2], [5,5], [6,6]];
          const initialCentroids = [[1,1], [6,6]];
          result = JSON.stringify(sandbox(points, 2, 1, initialCentroids));
          break;
        default:
          result = 'Error: Challenge not recognized';
      }
      
      setOutput(result);
      setIsCorrect(result === selectedChallenge.expectedOutput);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
      setIsCorrect(false);
    }
  };

  const resetCode = () => {
    if (selectedChallenge) {
      setCode(selectedChallenge.initialCode);
      setOutput('');
      setIsCorrect(null);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex items-center mb-4">
        <Code2 className="w-5 h-5 mr-2 text-indigo-400" />
        <h3 className="text-lg font-medium text-white">Coding Challenges</h3>
      </div>
      
      {!selectedChallenge ? (
        <div className="grid gap-3 overflow-y-auto pr-1">
          {challenges.map((challenge) => (
            <button
              key={challenge.id}
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors text-left"
              onClick={() => selectChallenge(challenge)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-white">{challenge.title}</span>
                <span className={`text-sm ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1 line-clamp-2">{challenge.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
            <div className="pr-2">
              <h4 className="font-medium text-white text-sm sm:text-base">{selectedChallenge.title}</h4>
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">{selectedChallenge.description}</p>
            </div>
            <button
              className="text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 whitespace-nowrap"
              onClick={() => setSelectedChallenge(null)}
            >
              Back to challenges
            </button>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3 flex-1 overflow-auto">
            <textarea
              className="w-full h-full min-h-[100px] bg-transparent text-gray-300 font-mono text-xs sm:text-sm resize-none focus:outline-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
            />
          </div>
          
          <div className="flex gap-2 mb-2 sm:mb-3 flex-wrap">
            <button
              className="bg-indigo-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-indigo-500 transition-colors text-xs sm:text-sm"
              onClick={runCode}
            >
              Run Code
            </button>
            <button
              className="bg-gray-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-600 transition-colors text-xs sm:text-sm"
              onClick={resetCode}
            >
              Reset
            </button>
            <button
              className="bg-gray-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-600 transition-colors ml-auto text-xs sm:text-sm"
              onClick={() => setShowHint(!showHint)}
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          </div>
          
          {showHint && selectedChallenge.hint && (
            <div className="bg-gray-800 p-2 sm:p-3 rounded-lg mb-2 sm:mb-3">
              <p className="text-xs sm:text-sm text-yellow-300">Hint: {selectedChallenge.hint}</p>
            </div>
          )}
          
          {output && (
            <div className="bg-gray-800 p-2 sm:p-3 rounded-lg overflow-auto">
              <div className="flex items-center mb-1 flex-wrap gap-1">
                <span className="text-xs sm:text-sm font-medium text-white">Output:</span>
                {isCorrect !== null && (
                  <span className="ml-2">
                    {isCorrect ? (
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span className="text-xs sm:text-sm">Correct!</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-400">
                        <XCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span className="text-xs sm:text-sm">Not quite right</span>
                      </div>
                    )}
                  </span>
                )}
              </div>
              <pre className="text-xs sm:text-sm font-mono text-gray-300 whitespace-pre-wrap">{output}</pre>
              {!isCorrect && selectedChallenge.expectedOutput && (
                <div className="mt-2">
                  <p className="text-xs sm:text-sm text-gray-400">Expected output:</p>
                  <pre className="text-xs sm:text-sm font-mono text-gray-300 whitespace-pre-wrap">{selectedChallenge.expectedOutput}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodingChallenges; 