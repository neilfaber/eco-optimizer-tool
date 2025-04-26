
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Leaf, Loader, Globe, ArrowRight } from 'lucide-react';
import { scanWebsite, storeScanResult } from '@/services/scanService';

const ScanForm = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Simulates scan progress updates
  const updateScanProgress = () => {
    const interval = setInterval(() => {
      setScanProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 300);
    
    return interval;
  };

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
    
    // Normalize URL (add https:// if missing)
    let normalizedUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      normalizedUrl = `https://${url}`;
    }
    
    try {
      // Validate URL format
      new URL(normalizedUrl);
    } catch {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL",
        variant: "destructive",
      });
      return;
    }
    
    setIsScanning(true);
    setScanProgress(0);
    
    // Start progress animation
    const progressInterval = updateScanProgress();
    
    try {
      // Perform the actual website scan
      const scanResult = await scanWebsite(normalizedUrl);
      
      // Ensure progress reaches 100% for smoother UX
      setScanProgress(100);
      
      // Store the scan result for retrieval on the dashboard
      storeScanResult(scanResult);
      
      toast({
        title: "Scan Complete",
        description: "Your website has been analyzed!",
      });
      
      // Navigate to dashboard with URL parameter
      setTimeout(() => {
        navigate(`/dashboard?url=${encodeURIComponent(normalizedUrl)}`);
      }, 500); // Small delay to show 100% completion
    } catch (error) {
      console.error('Scan error:', error);
      toast({
        title: "Scan Failed",
        description: "We couldn't complete the analysis. Please try again.",
        variant: "destructive",
      });
      setIsScanning(false);
      setScanProgress(0);
    } finally {
      clearInterval(progressInterval);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full">
          <Input
            type="text"
            placeholder="Enter your website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="py-6 pl-12 pr-4 text-lg rounded-lg border-green-200 focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-green-500"
            disabled={isScanning}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Globe className="h-5 w-5 text-green-500" />
          </div>
        </div>
        
        <Button 
          type="submit" 
          disabled={isScanning}
          size="lg"
          className="w-full md:w-auto py-6 px-8 text-lg bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 text-white transition-all"
        >
          {isScanning ? (
            <>
              <Loader className="mr-2 h-5 w-5 animate-spin" /> Scanning...
            </>
          ) : (
            <>
              Scan Now <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
      
      {/* Scan progress indicator */}
      {isScanning && (
        <div className="mt-6">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scanProgress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Analyzing website structure</span>
            <span>{Math.round(scanProgress)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanForm;
