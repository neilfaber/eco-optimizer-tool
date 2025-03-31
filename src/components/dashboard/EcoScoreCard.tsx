
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Leaf } from 'lucide-react';

interface EcoScoreCardProps {
  score: number;
}

const EcoScoreCard: React.FC<EcoScoreCardProps> = ({ score }) => {
  // Determine score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };
  
  // Determine score label
  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };
  
  // Determine progress color
  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-600 dark:bg-green-500';
    if (score >= 60) return 'bg-yellow-500 dark:bg-yellow-400';
    return 'bg-red-500 dark:bg-red-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Eco Score</h3>
        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
          <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
      </div>
      
      <div className="flex items-end justify-between mb-2">
        <div className={`text-5xl font-bold ${getScoreColor(score)}`}>
          {score}
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          out of 100
        </div>
      </div>
      
      <div className="mb-2">
        <Progress value={score} className={`h-2 ${getProgressColor(score)}`} style={{backgroundColor: 'rgb(229, 231, 235)'}} />
      </div>
      
      <div className="flex justify-between text-sm">
        <div className="text-gray-500 dark:text-gray-400">0</div>
        <div className={`font-medium ${getScoreColor(score)}`}>{getScoreLabel(score)}</div>
        <div className="text-gray-500 dark:text-gray-400">100</div>
      </div>
    </div>
  );
};

export default EcoScoreCard;
