
import React from 'react';
import { Button } from "@/components/ui/button";
import { Database, ExternalLink } from 'lucide-react';

interface GreenHost {
  name: string;
  logo: string;
  energySource: string;
  url: string;
}

interface HostingCardProps {
  currentHostIsGreen: boolean;
  recommendedHosts: GreenHost[];
}

const HostingCard: React.FC<HostingCardProps> = ({ 
  currentHostIsGreen,
  recommendedHosts
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900">Green Hosting</h3>
        <div className="bg-green-100 p-1 rounded-full">
          <Database className="h-5 w-5 text-green-600" />
        </div>
      </div>
      
      {currentHostIsGreen ? (
        <div className="bg-green-50 rounded-lg p-4 mb-4">
          <div className="text-green-800 font-semibold mb-1">Great News!</div>
          <div className="text-sm text-green-700">
            Your website is already hosted on a green hosting provider using renewable energy.
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 rounded-lg p-4 mb-4">
          <div className="text-yellow-800 font-semibold mb-1">Hosting Upgrade Recommended</div>
          <div className="text-sm text-yellow-700">
            Your current hosting provider doesn't use renewable energy. Consider switching to a green alternative.
          </div>
        </div>
      )}
      
      {!currentHostIsGreen && (
        <div>
          <div className="text-sm font-medium text-gray-700 mb-3">Recommended Green Hosts:</div>
          
          <div className="space-y-3">
            {recommendedHosts.map((host, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-green-200 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-900">{host.name}</div>
                  <img src={host.logo} alt={host.name} className="h-6" />
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Powered by {host.energySource}
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-green-600"
                  onClick={() => window.open(host.url, '_blank')}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HostingCard;
