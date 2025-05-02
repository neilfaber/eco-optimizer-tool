
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';

const WebsiteCard = ({ website }) => {
  const scoreImprovement = website.currentScore - website.initialScore;
  const formattedDate = new Date(website.lastScan).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">{website.url}</h3>
        <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 rounded-full px-3 py-1 text-xs font-medium">
          {scoreImprovement > 0 ? `+${scoreImprovement}` : scoreImprovement} points
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Current Score</p>
          <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{website.currentScore}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">CO₂ Saved</p>
          <p className="text-xl font-bold text-green-600 dark:text-green-500">{website.carbonSaved.toFixed(1)}kg</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Optimizations</p>
        <div className="flex flex-wrap gap-2">
          {website.optimizationsDone.map((opt, index) => (
            <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-xs">
              {opt}
            </span>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Last scan: {formattedDate}
      </div>
    </div>
  );
};

export const WebsitesList = ({ websites, navigate }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Websites</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {websites.map((website, index) => (
          <WebsiteCard key={index} website={website} />
        ))}
        
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <Globe className="h-10 w-10 text-gray-400 dark:text-gray-500 mb-3" />
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Add another website</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Scan another website to analyze its carbon footprint
          </p>
          <Button 
            variant="outline" 
            className="border-green-500 text-green-600 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
            onClick={() => navigate('/scan')}
          >
            Add website
          </Button>
        </div>
      </div>
    </div>
  );
};
