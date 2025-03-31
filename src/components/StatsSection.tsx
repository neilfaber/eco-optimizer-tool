
import React from 'react';
import { Globe, Zap, Book } from 'lucide-react';

const StatsSection = () => {
  return (
    <div className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Internet's Environmental Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-4">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">1 Billion+</h3>
            <p className="text-gray-600">Tons of CO₂ per year from internet usage, equivalent to the aviation industry</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-4">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">30-80%</h3>
            <p className="text-gray-600">Average reduction in emissions possible through website optimization</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-4">
              <Book className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">2-4 sec</h3>
            <p className="text-gray-600">Typical load time improvement from eco-optimizations, boosting both planet and profits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
