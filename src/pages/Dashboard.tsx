
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '@/services/userService';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EcoScoreCard from '@/components/dashboard/EcoScoreCard';
import EmissionsCard from '@/components/dashboard/EmissionsCard';
import PerformanceCard from '@/components/dashboard/PerformanceCard';
import OptimizationList from '@/components/dashboard/OptimizationList';
import CertificationCard from '@/components/dashboard/CertificationCard';
import HostingCard from '@/components/dashboard/HostingCard';
import { getLastScanResult, Optimization } from '@/services/scanService';
import { greenHosts } from '@/data/hostingProviders';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get('url') || 'example.com';
  const navigate = useNavigate();
  
  const [score, setScore] = useState(0);
  const [optimizations, setOptimizations] = useState<Optimization[]>([]);
  const [emissions, setEmissions] = useState({ gCO2PerVisit: 0, annualEmissions: 0, potentialSavings: 0 });
  const [performance, setPerformance] = useState({ loadTime: 0, pageSize: 0, requests: 0, potentialImprovement: 0 });
  const [hosting, setHosting] = useState({ isGreen: false });
  const [implemented, setImplemented] = useState(0);
  
  // Check authentication
  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate('/signin', { state: { returnUrl: '/dashboard' } });
    }
  }, [navigate]);
  
  // Load scan results
  useEffect(() => {
    const scanResult = getLastScanResult();
    
    if (scanResult) {
      setScore(scanResult.score);
      setOptimizations(scanResult.optimizations);
      setEmissions(scanResult.emissions);
      setPerformance(scanResult.performance);
      setHosting(scanResult.hosting);
    } else {
      // If no scan result is found, redirect to scan page
      navigate('/scan');
    }
  }, [navigate]);
  
  // Calculate implemented optimizations
  useEffect(() => {
    const implementedCount = optimizations.filter(o => o.implemented).length;
    setImplemented(implementedCount);
    
    // Update score based on implemented optimizations
    if (optimizations.length > 0) {
      const baseScore = getLastScanResult()?.score || 0;
      const newScore = Math.min(baseScore + (implementedCount * 6), 100);
      setScore(newScore);
    }
  }, [optimizations]);
  
  // Handle implementing an optimization
  const handleImplementOptimization = (id: string) => {
    setOptimizations(prev => 
      prev.map(opt => 
        opt.id === id ? { ...opt, implemented: true } : opt
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Website Audit Results</h1>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">URL:</span>
              <span className="ml-2 text-green-600">{url}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <EcoScoreCard score={score} />
            <EmissionsCard 
              gCO2PerVisit={emissions.gCO2PerVisit} 
              annualVisits={100000}
              potentialSavings={emissions.potentialSavings}
            />
            <PerformanceCard 
              loadTime={performance.loadTime}
              pageSize={performance.pageSize}
              requests={performance.requests}
              potentialImprovement={performance.potentialImprovement}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <OptimizationList 
                optimizations={optimizations}
                onImplement={handleImplementOptimization}
                websiteUrl={url}
              />
            </div>
            
            <div className="space-y-6">
              <CertificationCard 
                isEligible={score >= 80}
                score={score}
                requiredScore={80}
              />
              
              <HostingCard 
                currentHostIsGreen={hosting.isGreen}
                recommendedHosts={greenHosts}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
