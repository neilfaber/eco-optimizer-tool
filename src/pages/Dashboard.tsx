
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EcoScoreCard from '@/components/dashboard/EcoScoreCard';
import EmissionsCard from '@/components/dashboard/EmissionsCard';
import PerformanceCard from '@/components/dashboard/PerformanceCard';
import OptimizationList from '@/components/dashboard/OptimizationList';
import CertificationCard from '@/components/dashboard/CertificationCard';
import HostingCard from '@/components/dashboard/HostingCard';

// Simulated optimization data
const initialOptimizations = [
  {
    id: '1',
    title: 'Compress JPG and PNG images',
    description: 'Your site has 12 unoptimized images that could be compressed by an average of 62% without quality loss.',
    impact: 'high' as const,
    category: 'Images',
    co2Saving: 24.5,
    implemented: false
  },
  {
    id: '2',
    title: 'Enable browser caching',
    description: 'Setting proper cache headers can reduce repeat downloads and save bandwidth.',
    impact: 'medium' as const,
    category: 'Performance',
    co2Saving: 16.2,
    implemented: false
  },
  {
    id: '3',
    title: 'Minify JavaScript and CSS',
    description: 'Removing whitespace and comments can reduce file sizes by ~20%.',
    impact: 'medium' as const,
    category: 'Code',
    co2Saving: 9.8,
    implemented: false
  },
  {
    id: '4',
    title: 'Convert images to WebP format',
    description: 'WebP offers superior compression and quality compared to JPG and PNG.',
    impact: 'high' as const,
    category: 'Images',
    co2Saving: 18.3,
    implemented: false
  },
  {
    id: '5',
    title: 'Implement lazy loading for below-the-fold images',
    description: 'Only load images when they're about to enter the viewport.',
    impact: 'medium' as const,
    category: 'Images',
    co2Saving: 12.1,
    implemented: false
  },
  {
    id: '6',
    title: 'Replace custom fonts with system fonts',
    description: 'System fonts don't require additional downloads and render faster.',
    impact: 'low' as const,
    category: 'Fonts',
    co2Saving: 4.5,
    implemented: false
  }
];

// Simulated green hosting providers
const greenHosts = [
  {
    name: 'GreenGeeks',
    logo: 'https://www.greengeeks.com/assets/GreenGeeks_Logo.png',
    energySource: '300% Renewable Energy',
    url: 'https://www.greengeeks.com'
  },
  {
    name: 'A2 Hosting',
    logo: 'https://www.a2hosting.com/assets/images/A2-Hosting-horizontal-white-text.svg',
    energySource: '100% Renewable Energy',
    url: 'https://www.a2hosting.com'
  },
  {
    name: 'DreamHost',
    logo: 'https://www.dreamhost.com/assets/images/logo.svg',
    energySource: '100% Carbon Neutral',
    url: 'https://www.dreamhost.com'
  }
];

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get('url') || 'example.com';
  
  const [score, setScore] = useState(62);
  const [optimizations, setOptimizations] = useState(initialOptimizations);
  const [implemented, setImplemented] = useState(0);
  
  // Calculate score based on implemented optimizations
  useEffect(() => {
    const implementedCount = optimizations.filter(o => o.implemented).length;
    setImplemented(implementedCount);
    
    // Update score based on implemented optimizations
    const newScore = Math.min(62 + (implementedCount * 6), 100);
    setScore(newScore);
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
              gCO2PerVisit={1.82} 
              annualVisits={100000}
              potentialSavings={68}
            />
            <PerformanceCard 
              loadTime={3.4}
              pageSize={2300000}
              requests={56}
              potentialImprovement={1.8}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <OptimizationList 
                optimizations={optimizations}
                onImplement={handleImplementOptimization}
              />
            </div>
            
            <div className="space-y-6">
              <CertificationCard 
                isEligible={score >= 80}
                score={score}
                requiredScore={80}
              />
              
              <HostingCard 
                currentHostIsGreen={false}
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
