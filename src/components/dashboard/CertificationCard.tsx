
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Leaf, Download, Share2 } from 'lucide-react';

interface CertificationCardProps {
  isEligible: boolean;
  score: number;
  requiredScore: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  isEligible, 
  score,
  requiredScore 
}) => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    toast({
      title: "Certificate Downloaded",
      description: "Your eco-certification has been downloaded.",
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share Options",
      description: "Sharing options have been opened.",
    });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900">Eco Certification</h3>
        <div className="bg-green-100 p-1 rounded-full">
          <Leaf className="h-5 w-5 text-green-600" />
        </div>
      </div>
      
      {isEligible ? (
        <div>
          <div className="bg-green-50 rounded-lg p-4 mb-4 flex items-center">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-green-800 font-semibold">Certification Earned!</div>
              <div className="text-sm text-green-700">Your website meets our eco-friendly standards.</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-2" /> Download Certificate
            </Button>
            
            <Button 
              variant="outline"
              className="w-full border-green-500 text-green-600 hover:bg-green-50"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-2" /> Share Achievement
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-yellow-50 rounded-lg p-4 mb-4">
            <div className="text-yellow-800 font-semibold mb-1">Almost There!</div>
            <div className="text-sm text-yellow-700">
              Your eco score is {score}, but you need {requiredScore} to earn certification.
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-gray-700 text-sm">
              Implement the suggested optimizations to improve your score and earn the eco-friendly certification.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;
