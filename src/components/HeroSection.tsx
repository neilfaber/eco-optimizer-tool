
import React from 'react';
import { Button } from "@/components/ui/button";
import { Leaf, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="pt-20 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center bg-green-50 rounded-full px-3 py-1 text-sm font-medium text-green-600 mb-6">
          <Leaf className="h-4 w-4 mr-1" /> Reducing digital carbon footprints
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Make Your Website 
          <span className="text-green-600 ml-2">Eco-Friendly</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          GreenAudit analyzes your website's environmental impact and provides actionable insights to reduce its carbon footprint while improving performance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/scan">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              Scan Your Website
            </Button>
          </Link>
          <Link to="/features">
            <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-6 text-lg">
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 flex justify-center">
          <ArrowDown className="h-8 w-8 text-green-500 animate-bounce-slow" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
