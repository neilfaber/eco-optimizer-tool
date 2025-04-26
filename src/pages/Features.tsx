
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import { Gauge, Zap, Database, Shield, GlobeLock, ArrowUp, Code, Leaf } from 'lucide-react';

const FeatureDetail = ({ 
  icon, 
  title, 
  description,
  points
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  points: string[];
}) => {
  return (
    <div className="py-12 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full p-3 mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        </div>
        
        <div className="md:col-span-2">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{description}</p>
          
          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-1 mr-3">
                  <Leaf className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Gauge className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Carbon Impact Dashboard",
      description: "Our powerful dashboard provides real-time insights into your website's environmental impact with clear metrics and visualizations.",
      points: [
        "Real-time CO₂ calculator shows emissions per page view",
        "Environmental equivalents (e.g., trees needed to offset emissions)",
        "Historical tracking to monitor your progress over time",
        "Compare your site against industry benchmarks"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Automated Fixes",
      description: "GreenAudit doesn't just identify problems – it provides one-click solutions to reduce your website's carbon footprint.",
      points: [
        "AI-powered code minification without breaking functionality",
        "Smart image compression that preserves quality",
        "Lazy loading implementation for media-heavy sites",
        "Dark mode suggestions that reduce OLED screen energy use"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Green Hosting Recommender",
      description: "Find environmentally responsible hosting providers that align with your sustainability goals.",
      points: [
        "Curated database of hosting providers using renewable energy",
        "Migration assistance to help you switch with minimal downtime",
        "Regional recommendations based on energy grid cleanliness",
        "Periodic reminders to review your hosting environmental impact"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Eco-Score Certification",
      description: "Earn recognition for your commitment to environmental responsibility with our trusted certification.",
      points: [
        "SEO-friendly certification badge for your website",
        "Detailed breakdown of your eco-score components",
        "Annual renewal process to maintain high standards",
        "Featured placement in our directory of green websites"
      ]
    },
    {
      icon: <GlobeLock className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Dark Pattern Detector",
      description: "Identify user experience elements that waste energy and provide ethical alternatives.",
      points: [
        "Detection of infinite scroll and auto-play features",
        "Analysis of unnecessary animations and transitions",
        "Suggestions for energy-efficient UX alternatives",
        "Educational resources on sustainable design principles"
      ]
    },
    {
      icon: <ArrowUp className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Performance Correlation",
      description: "See the direct relationship between sustainability improvements and website performance.",
      points: [
        "Speed improvement metrics tied to each eco-optimization",
        "SEO impact analysis of green website practices",
        "Bounce rate predictions based on performance changes",
        "Revenue impact calculator for e-commerce sites"
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Developer API",
      description: "Integrate GreenAudit's powerful tools directly into your development workflow.",
      points: [
        "Continuous monitoring via CI/CD pipeline integration",
        "Team notifications when new inefficiencies are detected",
        "Webhooks for custom workflow automation",
        "Detailed technical reports for developer implementation"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="pt-24 pb-16 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features for a Greener Web</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              GreenAudit provides comprehensive tools to analyze, optimize, and certify your website's environmental impact.
            </p>
          </div>
        </div>
        
        <div className="py-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {features.map((feature, index) => (
              <FeatureDetail 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                points={feature.points}
              />
            ))}
          </div>
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
