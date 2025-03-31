
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Leaf } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 eco-gradient">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6">
          <Leaf className="h-4 w-4 mr-1.5" /> Join the green web movement
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to reduce your website's carbon footprint?
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Start with a free scan and see how your website impacts the environment. 
          Get actionable insights to make your digital presence more sustainable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/scan">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-6 text-lg">
              Get Your Free Scan
            </Button>
          </Link>
          <Link to="/pricing">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
