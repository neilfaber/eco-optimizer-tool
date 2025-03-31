
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <div className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How GreenAudit Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to reduce your website's carbon footprint and improve performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full h-16 w-16 mb-4">
              <span className="text-2xl font-bold text-green-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Scan Your Website</h3>
            <p className="text-gray-600">
              Enter your URL and our AI will analyze your website's environmental impact, code efficiency, and more.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full h-16 w-16 mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Actionable Reports</h3>
            <p className="text-gray-600">
              Receive detailed insights with priority-ranked improvements and their potential environmental impact.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full h-16 w-16 mb-4">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimize & Certify</h3>
            <p className="text-gray-600">
              Implement our suggestions, verify improvements, and earn your Green Certification badge.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/scan">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
              Start Your Free Scan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
