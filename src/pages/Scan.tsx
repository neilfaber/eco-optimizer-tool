
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScanForm from '@/components/ScanForm';
import { Leaf, Gauge, Zap, Shield, Globe } from 'lucide-react';

const Scan = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow">
        <div className="pt-24 pb-16 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-green-300/10 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-green-400/10 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Analyze Your Website's Eco Impact</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                Get a comprehensive report on your website's carbon footprint and actionable tips to make it greener.
              </p>
              
              <ScanForm />
            </div>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                    <Gauge className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Comprehensive Audit</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We analyze page size, code efficiency, images, hosting, and more to calculate your site's carbon impact.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                    <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Actionable Insights</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Get prioritized recommendations with their potential CO₂ savings and implementation difficulty.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Certification Ready</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  After implementing our suggestions, earn a digital certification badge to showcase your commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scan;
