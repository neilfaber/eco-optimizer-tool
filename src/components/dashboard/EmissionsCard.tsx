
import React from 'react';
import { Trees, Zap } from 'lucide-react';

interface EmissionsCardProps {
  gCO2PerVisit: number;
  annualVisits: number;
  potentialSavings: number;
}

const EmissionsCard: React.FC<EmissionsCardProps> = ({ 
  gCO2PerVisit, 
  annualVisits,
  potentialSavings
}) => {
  // Make sure we have valid numbers for calculations to avoid the toFixed error
  const safeGCO2PerVisit = typeof gCO2PerVisit === 'number' ? gCO2PerVisit : 0;
  const safeAnnualVisits = typeof annualVisits === 'number' ? annualVisits : 0;
  const safePotentialSavings = typeof potentialSavings === 'number' ? potentialSavings : 0;

  const annualEmissions = (safeGCO2PerVisit * safeAnnualVisits) / 1000; // convert to kg
  const treesEquivalent = Math.round(annualEmissions / 21); // avg tree absorbs ~21kg CO2 per year
  const potentialReduction = (safePotentialSavings * annualEmissions) / 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Carbon Impact</h3>
        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
          <Zap className="h-5 w-5 text-green-600 dark:text-green-500" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{safeGCO2PerVisit.toFixed(2)}g</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">CO₂ per visit</div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{annualEmissions.toFixed(1)}kg</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Annual CO₂ emissions</div>
        </div>
      </div>
      
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
        <div className="flex items-center">
          <div className="bg-green-100 dark:bg-green-800/40 p-1 rounded-full mr-2">
            <Trees className="h-4 w-4 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            Equivalent to {treesEquivalent} tree{treesEquivalent !== 1 ? 's' : ''} per year
          </div>
        </div>
      </div>
      
      <div className="bg-green-100 dark:bg-green-800/20 rounded-lg p-4">
        <div className="text-lg font-semibold text-green-800 dark:text-green-300">Potential Savings</div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-2xl font-bold text-green-700 dark:text-green-400">{potentialReduction.toFixed(1)}kg CO₂/yr</div>
          <div className="text-green-600 dark:text-green-400">-{safePotentialSavings}%</div>
        </div>
      </div>
    </div>
  );
};

export default EmissionsCard;
