
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Leaf } from 'lucide-react';

interface EcoScoreCardProps {
  score: number;
}

const EcoScoreCard: React.FC<EcoScoreCardProps> = ({ score }) => {
  // Determine score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
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
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900">Eco Score</h3>
        <div className="bg-green-100 p-1 rounded-full">
          <Leaf className="h-5 w-5 text-green-600" />
        </div>
      </div>
      
      <div className="flex items-end justify-between mb-2">
        <div className={`text-5xl font-bold ${getScoreColor(score)}`}>
          {score}
        </div>
        <div className="text-gray-500 text-sm font-medium">
          out of 100
        </div>
      </div>
      
      <div className="mb-2">
        <Progress value={score} className="h-2" indicatorClassName={getProgressColor(score)} />
      </div>
      
      <div className="flex justify-between text-sm">
        <div className="text-gray-500">0</div>
        <div className={`font-medium ${getScoreColor(score)}`}>{getScoreLabel(score)}</div>
        <div className="text-gray-500">100</div>
      </div>
    </div>
  );
};

export default EcoScoreCard;
