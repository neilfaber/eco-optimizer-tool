
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Leaf, Loader } from 'lucide-react';

const ScanForm = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate URL
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a website URL",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Add basic URL validation
      new URL(url.startsWith('http') ? url : `https://${url}`);
    } catch {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL",
        variant: "destructive",
      });
      return;
    }
    
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      
      // Redirect to results page would happen here in a real app
      toast({
        title: "Scan Complete",
        description: "Your website has been analyzed!",
      });
      
      window.location.href = `/dashboard?url=${encodeURIComponent(url)}`;
    }, 3000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Enter your website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="py-6 pl-12 pr-4 text-lg rounded-lg border-green-200 focus:border-green-500 focus:ring-green-500"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Leaf className="h-5 w-5 text-green-500" />
          </div>
        </div>
        
        <Button 
          type="submit" 
          disabled={isScanning}
          size="lg"
          className="w-full md:w-auto py-6 px-8 text-lg bg-green-600 hover:bg-green-700 text-white"
        >
          {isScanning ? (
            <>
              <Loader className="mr-2 h-5 w-5 animate-spin" /> Scanning...
            </>
          ) : (
            "Scan Now"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ScanForm;
