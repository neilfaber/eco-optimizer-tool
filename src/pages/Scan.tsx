
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScanForm from '@/components/ScanForm';
import { scanWebsite, ScanResult } from '@/services/websiteScanner';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, CheckCircle, XCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import EcoScoreCard from '@/components/dashboard/EcoScoreCard';
import EmissionsCard from '@/components/dashboard/EmissionsCard';
import PerformanceCard from '@/components/dashboard/PerformanceCard';
import OptimizationList from '@/components/dashboard/OptimizationList';
import { toast } from '@/components/ui/use-toast';
import { Optimization } from '@/services/scanService';

const Scan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [scanProgress, setScanProgress] = useState(0);
  
  const handleScanSubmit = async (url: string) => {
    try {
      setIsScanning(true);
      setScanResult(null);
      
      // Simulate progressive scanning steps
      const simulateScanProgress = () => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 5;
          setScanProgress(progress);
          
          if (progress >= 95) {
            clearInterval(interval);
          }
        }, 200);
        return interval;
      };
      
      const progressInterval = simulateScanProgress();
      
      // Actual scan
      const result = await scanWebsite(url);
      
      // Clear simulation interval and complete progress
      clearInterval(progressInterval);
      setScanProgress(100);
      
      // Set results
      setScanResult(result);
      toast({
        title: "Scan completed",
        description: `Your scan of ${url} is complete.`,
      });
    } catch (error) {
      toast({
        title: "Scan failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Website Carbon Footprint Scanner</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enter your website URL below to analyze its carbon footprint and get actionable recommendations for improvement.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <ScanForm onSubmit={handleScanSubmit} isScanning={isScanning} />
          </div>
          
          {isScanning && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Loader2 className="h-12 w-12 text-green-500 dark:text-green-400 animate-spin" />
              </div>
              <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white mb-6">
                Scanning your website...
              </h3>
              <div className="space-y-2">
                <Progress value={scanProgress} className="h-2 w-full" />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Analyzing performance</span>
                  <span>{scanProgress}%</span>
                </div>
              </div>
            </div>
          )}
          
          {!isScanning && scanResult && (
            <div className="animate-fade-in">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <span className="font-medium text-green-800 dark:text-green-300">Scan Complete</span>
                </div>
                <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
                  Results for <span className="text-green-600 dark:text-green-400">{scanResult.url}</span>
                </h2>
              </div>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="carbon">Carbon Impact</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <EcoScoreCard score={scanResult.ecoScore} />
                    <EmissionsCard 
                      emissions={scanResult.carbonImpact.grams} 
                      rating={scanResult.carbonImpact.rating} 
                    />
                    <Card className="bg-white dark:bg-gray-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-semibold flex items-center">
                          Green Certification
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 flex flex-col items-center">
                        {scanResult.greenCertification ? (
                          <>
                            <div className="h-24 w-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                              <CheckCircle className="h-12 w-12 text-green-500 dark:text-green-400" />
                            </div>
                            <span className="text-green-600 dark:text-green-400 font-medium">Certified Green Website</span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-center">
                              This website meets our eco-friendly standards
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="h-24 w-24 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                              <AlertTriangle className="h-12 w-12 text-amber-500 dark:text-amber-400" />
                            </div>
                            <span className="text-amber-600 dark:text-amber-400 font-medium">Not Yet Certified</span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-center">
                              Implement our recommendations to earn certification
                            </p>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Key Findings</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className={`mt-1 rounded-full p-1 ${scanResult.performance.score >= 70 ? 'bg-green-100 dark:bg-green-900/30' : 'bg-amber-100 dark:bg-amber-900/30'} mr-3`}>
                          {scanResult.performance.score >= 70 ? 
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" /> : 
                            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          }
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Performance Score: {scanResult.performance.score}</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {scanResult.performance.score >= 90 ? 'Excellent performance' : 
                             scanResult.performance.score >= 70 ? 'Good performance, but can be improved' :
                             scanResult.performance.score >= 50 ? 'Average performance, needs improvement' :
                             'Poor performance, significant improvements needed'}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className={`mt-1 rounded-full p-1 ${scanResult.ecoScore >= 70 ? 'bg-green-100 dark:bg-green-900/30' : 'bg-amber-100 dark:bg-amber-900/30'} mr-3`}>
                          {scanResult.ecoScore >= 70 ? 
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" /> : 
                            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          }
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Eco Score: {scanResult.ecoScore}/100</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {scanResult.ecoScore >= 90 ? 'Excellent eco-friendly website' : 
                             scanResult.ecoScore >= 70 ? 'Good eco score, with room for improvement' :
                             scanResult.ecoScore >= 50 ? 'Average eco score, needs optimization' :
                             'Poor eco score, consider implementing our recommendations'}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className={`mt-1 rounded-full p-1 ${scanResult.carbonImpact.grams < 1 ? 'bg-green-100 dark:bg-green-900/30' : 'bg-amber-100 dark:bg-amber-900/30'} mr-3`}>
                          {scanResult.carbonImpact.grams < 1 ? 
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" /> : 
                            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          }
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Carbon Impact: {scanResult.carbonImpact.grams}g CO₂ per visit</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {scanResult.carbonImpact.rating === 'excellent' ? 'Excellent low-carbon website' : 
                             scanResult.carbonImpact.rating === 'good' ? 'Good carbon footprint, but could be improved' :
                             scanResult.carbonImpact.rating === 'average' ? 'Average carbon footprint, needs reduction' :
                             'High carbon footprint, significant optimization needed'}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="carbon">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <EmissionsCard 
                      emissions={scanResult.carbonImpact.grams} 
                      rating={scanResult.carbonImpact.rating} 
                      className="h-full"
                    />
                    <Card className="bg-white dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="text-lg">Carbon Impact Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Yearly impact (10,000 visits)</div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {(scanResult.carbonImpact.grams * 10000 / 1000).toFixed(1)}kg CO₂
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Equivalent to driving approximately {Math.round(scanResult.carbonImpact.grams * 10000 * 0.004)} km in a car
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">How we calculate this</div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                            Carbon impact is calculated based on page weight, estimated server energy use,
                            and network transfer energy. We use industry standard emissions factors and adjust based on performance score.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="performance">
                  <div className="grid grid-cols-1 gap-6">
                    <PerformanceCard 
                      performanceScore={scanResult.performance.score}
                      metrics={[
                        { 
                          name: "First Contentful Paint", 
                          value: `${scanResult.performance.firstContentfulPaint.toFixed(1)}s`, 
                          status: scanResult.performance.firstContentfulPaint < 1.8 ? "good" : 
                                 scanResult.performance.firstContentfulPaint < 3 ? "average" : "poor"
                        },
                        { 
                          name: "Largest Contentful Paint", 
                          value: `${scanResult.performance.largestContentfulPaint.toFixed(1)}s`, 
                          status: scanResult.performance.largestContentfulPaint < 2.5 ? "good" : 
                                 scanResult.performance.largestContentfulPaint < 4 ? "average" : "poor"
                        },
                        { 
                          name: "Total Blocking Time", 
                          value: `${scanResult.performance.totalBlockingTime}ms`, 
                          status: scanResult.performance.totalBlockingTime < 200 ? "good" : 
                                 scanResult.performance.totalBlockingTime < 600 ? "average" : "poor"
                        },
                        { 
                          name: "Cumulative Layout Shift", 
                          value: scanResult.performance.cumulativeLayoutShift.toFixed(2), 
                          status: scanResult.performance.cumulativeLayoutShift < 0.1 ? "good" : 
                                 scanResult.performance.cumulativeLayoutShift < 0.25 ? "average" : "poor"
                        }
                      ]}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="recommendations">
                  <OptimizationList 
                    optimizations={scanResult.optimizations.map(opt => ({
                      id: opt.id || '',
                      title: opt.title,
                      description: opt.description,
                      impact: opt.impact,
                      category: 'optimization',
                      co2Saving: 0,
                      implemented: false
                    } as Optimization))} 
                  />
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  onClick={() => window.print()}
                  className="mr-2 bg-white dark:bg-gray-800"
                >
                  Save as PDF
                </Button>
                <Button>
                  <Link to="/dashboard" className="flex items-center">
                    View in Dashboard
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Type declaration for Link to avoid TS error
const Link = ({ to, className, children }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

export default Scan;
