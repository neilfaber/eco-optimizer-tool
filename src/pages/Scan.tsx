
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScanForm from '@/components/ScanForm';
import { Leaf, Gauge, Zap, Shield } from 'lucide-react';

const Scan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="pt-24 pb-16 bg-gradient-to-b from-white to-green-50 leaf-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Analyze Your Website's Eco Impact</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Get a comprehensive report on your website's carbon footprint and actionable tips to make it greener.
              </p>
              
              <ScanForm />
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Gauge className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Comprehensive Audit</h3>
                </div>
                <p className="text-gray-600">
                  We analyze page size, code efficiency, images, hosting, and more to calculate your site's carbon impact.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Actionable Insights</h3>
                </div>
                <p className="text-gray-600">
                  Get prioritized recommendations with their potential CO₂ savings and implementation difficulty.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Certification Ready</h3>
                </div>
                <p className="text-gray-600">
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
