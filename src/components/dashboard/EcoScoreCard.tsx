
import React from 'react';
import { Leaf } from 'lucide-react';

interface EcoScoreCardProps {
  score: number;
}

const EcoScoreCard: React.FC<EcoScoreCardProps> = ({ score }) => {
  // Calculate the circumference of the circle
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the filled portion of the circle based on the score
  const fillPercent = score / 100;
  const dashOffset = circumference - (circumference * fillPercent);
  
  // Determine score color and label
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };
  
  const getStrokeColor = (score: number) => {
    if (score >= 80) return 'stroke-green-500';
    if (score >= 60) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Eco Score</h3>
        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
          <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
      </div>
      
      <div className="flex justify-center items-center mb-4">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Background circle */}
          <svg className="w-full h-full" viewBox="0 0 160 160">
            <circle 
              cx="80" 
              cy="80" 
              r={radius} 
              fill="none" 
              strokeWidth="10" 
              className="stroke-gray-100 dark:stroke-gray-700" 
            />
            {/* Progress circle */}
            <circle 
              cx="80" 
              cy="80" 
              r={radius} 
              fill="none" 
              strokeWidth="10" 
              className={`${getStrokeColor(score)} transition-all duration-1000 ease-in-out`} 
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ 
                transformOrigin: 'center',
                transform: 'rotate(-90deg)'
              }}
            />
          </svg>
          
          {/* Score text in the middle */}
          <div className="absolute flex flex-col items-center">
            <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
              {score}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              out of 100
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className={`font-medium text-sm ${getScoreColor(score)}`}>
          {getScoreLabel(score)}
        </div>
      </div>
    </div>
  );
};

export default EcoScoreCard;
