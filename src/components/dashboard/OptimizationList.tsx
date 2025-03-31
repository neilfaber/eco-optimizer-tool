
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Check, AlertTriangle, ArrowRight, Zap } from 'lucide-react';
import { recordOptimization } from '@/services/userService';

interface Optimization {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
  co2Saving: number;
  implemented: boolean;
}

interface OptimizationListProps {
  optimizations: Optimization[];
  onImplement: (id: string) => void;
  websiteUrl?: string;
}

const OptimizationList: React.FC<OptimizationListProps> = ({ 
  optimizations,
  onImplement,
  websiteUrl = 'example.com'
}) => {
  const { toast } = useToast();
  
  const handleImplementClick = (id: string) => {
    const optimization = optimizations.find(opt => opt.id === id);
    
    if (optimization) {
      // Update the UI first
      onImplement(id);
      
      // Record this optimization in the user's profile
      const scoreImprovement = optimization.impact === 'high' ? 8 : 
                              optimization.impact === 'medium' ? 5 : 3;
                              
      recordOptimization(
        websiteUrl,
        optimization.title,
        scoreImprovement,
        optimization.co2Saving
      );
      
      // Show toast notification with eco credits earned
      const ecoCreditsEarned = Math.round(optimization.co2Saving * 5); // 5 credits per kg saved
      
      toast({
        title: "Optimization Applied",
        description: `You earned ${ecoCreditsEarned} eco credits and saved ${optimization.co2Saving}kg of CO₂ per year!`,
      });
    }
  };
  
  // Get impact color
  const getImpactColor = (impact: string) => {
    switch(impact) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get impact icon
  const getImpactIcon = (impact: string) => {
    switch(impact) {
      case 'high': return <AlertTriangle className="h-4 w-4" />;
      case 'medium': return <AlertTriangle className="h-4 w-4" />;
      case 'low': return <ArrowRight className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="border-b border-gray-200 px-6 py-4">
        <h3 className="font-semibold text-lg text-gray-900">Recommended Optimizations</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {optimizations.map((opt) => (
          <div key={opt.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex space-x-3">
                <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getImpactColor(opt.impact)}`}>
                  {getImpactIcon(opt.impact)}
                  <span className="ml-1 capitalize">{opt.impact} Impact</span>
                </div>
                <div className="bg-gray-100 text-gray-700 rounded-full px-2.5 py-0.5 text-xs font-medium">
                  {opt.category}
                </div>
              </div>
              
              {opt.implemented ? (
                <div className="inline-flex items-center text-green-600 text-sm">
                  <Check className="h-4 w-4 mr-1" /> Implemented
                </div>
              ) : null}
            </div>
            
            <h4 className="font-medium text-gray-900 mb-1">{opt.title}</h4>
            <p className="text-gray-600 text-sm mb-3">{opt.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="text-green-600 text-sm font-medium">
                Saves {opt.co2Saving}kg CO₂/year
              </div>
              
              {!opt.implemented && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => handleImplementClick(opt.id)}
                >
                  <Zap className="h-4 w-4 mr-1" /> Implement
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimizationList;
