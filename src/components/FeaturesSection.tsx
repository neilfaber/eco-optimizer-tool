
import React from 'react';
import { Gauge, Database, Leaf, Shield, Zap, ArrowUp, GlobeLock } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full p-2 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features for a Greener Web</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive tools to analyze, optimize, and certify your website's environmental impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Gauge className="h-6 w-6 text-green-600 dark:text-green-500" />} 
            title="Carbon Impact Dashboard" 
            description="Real-time CO₂ savings calculator with visual representations of your environmental impact."
          />
          
          <FeatureCard 
            icon={<Zap className="h-6 w-6 text-green-600 dark:text-green-500" />} 
            title="One-Click Optimization" 
            description="AI-powered fixes for code, images, fonts and more to reduce emissions instantly."
          />
          
          <FeatureCard 
            icon={<Database className="h-6 w-6 text-green-600 dark:text-green-500" />} 
            title="Green Hosting Recommender" 
            description="Find eco-friendly hosting providers that use renewable energy sources."
          />
          
          <FeatureCard 
            icon={<Shield className="h-6 w-6 text-green-600 dark:text-green-500" />} 
            title="Eco-Score Certification" 
            description="Earn a verifiable badge to showcase your commitment to sustainable web practices."
          />
          
          <FeatureCard 
            icon={<GlobeLock className="h-6 w-6 text-green-600 dark:text-green-500" />} 
            title="Dark Pattern Detector" 
            description="Identify energy-wasting UX patterns and get sustainable alternatives."
          />
          
          <FeatureCard 
            icon={<ArrowUp className="h-6 w-6 text-green-600 dark:text-green-500" />} 
            title="Performance Correlation" 
            description="See how sustainability improvements directly boost your site's speed and SEO."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
