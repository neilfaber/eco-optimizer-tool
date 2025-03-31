
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
  const annualEmissions = (gCO2PerVisit * annualVisits) / 1000; // convert to kg
  const treesEquivalent = Math.round(annualEmissions / 21); // avg tree absorbs ~21kg CO2 per year
  const potentialReduction = (potentialSavings * annualEmissions) / 100;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900">Carbon Impact</h3>
        <div className="bg-green-100 p-1 rounded-full">
          <Zap className="h-5 w-5 text-green-600" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900">{gCO2PerVisit.toFixed(2)}g</div>
          <div className="text-sm text-gray-500">CO₂ per visit</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900">{annualEmissions.toFixed(1)}kg</div>
          <div className="text-sm text-gray-500">Annual CO₂ emissions</div>
        </div>
      </div>
      
      <div className="bg-green-50 rounded-lg p-4 mb-4">
        <div className="flex items-center">
          <div className="bg-green-100 p-1 rounded-full mr-2">
            <Trees className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-sm text-gray-700">
            Equivalent to {treesEquivalent} tree{treesEquivalent !== 1 ? 's' : ''} per year
          </div>
        </div>
      </div>
      
      <div className="bg-green-100 rounded-lg p-4">
        <div className="text-lg font-semibold text-green-800">Potential Savings</div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-2xl font-bold text-green-700">{potentialReduction.toFixed(1)}kg CO₂/yr</div>
          <div className="text-green-600">-{potentialSavings}%</div>
        </div>
      </div>
    </div>
  );
};

export default EmissionsCard;
