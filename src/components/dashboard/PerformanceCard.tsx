
import React from 'react';
import { Gauge, ArrowUp } from 'lucide-react';

interface PerformanceCardProps {
  loadTime: number;
  pageSize: number;
  requests: number;
  potentialImprovement: number;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  loadTime,
  pageSize,
  requests,
  potentialImprovement
}) => {
  // Add safety checks to avoid the toFixed error
  const safeLoadTime = typeof loadTime === 'number' ? loadTime : 0;
  const safePageSize = typeof pageSize === 'number' ? pageSize : 0;
  const safeRequests = typeof requests === 'number' ? requests : 0;
  const safePotentialImprovement = typeof potentialImprovement === 'number' ? potentialImprovement : 0;
  
  // Format page size
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };
  
  // Determine load time color
  const getLoadTimeColor = (time: number) => {
    if (time <= 2) return 'text-green-600 dark:text-green-400';
    if (time <= 4) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Performance Metrics</h3>
        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
          <Gauge className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Load Time</div>
          <div className={`text-2xl font-bold ${getLoadTimeColor(safeLoadTime)}`}>
            {safeLoadTime.toFixed(1)}s
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Page Size</div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white">{formatSize(safePageSize)}</div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Requests</div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white">{safeRequests}</div>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <ArrowUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <div className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Potential Improvement
            </div>
          </div>
          <div className="mt-1 text-lg font-semibold text-blue-800 dark:text-blue-300">
            {safePotentialImprovement.toFixed(1)}s faster load time
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
