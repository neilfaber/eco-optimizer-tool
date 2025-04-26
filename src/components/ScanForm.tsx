
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Loader2 } from 'lucide-react';

interface ScanFormProps {
  onSubmit: (url: string) => void;
  isScanning: boolean;
}

const ScanForm: React.FC<ScanFormProps> = ({ onSubmit, isScanning }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    // Basic URL format validation
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9][-a-zA-Z0-9]*\.)+[a-zA-Z]{2,}(\/.*)?$/;
    if (!urlPattern.test(url)) {
      setError('Please enter a valid URL');
      return;
    }
    
    setError('');
    onSubmit(url);
  };

  return (
    <Card className="bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Enter website URL
          </label>
          <div className="relative">
            <Input
              id="url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="example.com"
              className="pl-10 bg-white dark:bg-gray-800"
              disabled={isScanning}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          {error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600 flex-1"
            disabled={isScanning}
          >
            {isScanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scanning...
              </>
            ) : (
              'Scan Website'
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 flex-1"
            onClick={() => setUrl('')}
            disabled={isScanning || !url}
          >
            Clear
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ScanForm;
