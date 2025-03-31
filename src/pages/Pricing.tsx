
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  highlighted = false 
}) => {
  return (
    <div className={`rounded-xl border ${highlighted ? 'border-green-500 shadow-lg' : 'border-gray-200'} p-6 flex flex-col h-full`}>
      <div className="mb-5">
        <h3 className={`text-xl font-bold ${highlighted ? 'text-green-600' : 'text-gray-900'}`}>{title}</h3>
        <div className="mt-2 mb-4">
          <span className="text-3xl font-bold">${price}</span>
          {price > 0 && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-3 flex-grow mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle2 className={`h-5 w-5 ${highlighted ? 'text-green-500' : 'text-gray-500'} mr-2 shrink-0 mt-0.5`} />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        <Link to="/signup">
          <Button 
            className={`w-full ${highlighted 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-800'}`}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Free",
      price: 0,
      description: "Perfect for testing and small personal websites.",
      features: [
        "5 website scans per month",
        "Basic optimization recommendations",
        "CO₂ emissions report",
        "Web performance insights",
      ],
      buttonText: "Start for free",
      highlighted: false,
    },
    {
      title: "Professional",
      price: 29,
      description: "Ideal for professionals and growing businesses.",
      features: [
        "Unlimited website scans",
        "Advanced optimization analysis",
        "Detailed emissions tracking",
        "Performance monitoring",
        "Green certification",
        "API access",
        "Email reports",
      ],
      buttonText: "Get started",
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: 99,
      description: "For organizations with multiple websites and complex needs.",
      features: [
        "Everything in Professional",
        "Custom reporting",
        "Multiple user accounts",
        "Priority support",
        "Bulk website scanning",
        "White-label reports",
        "Advanced analytics",
        "Custom integrations",
      ],
      buttonText: "Contact sales",
      highlighted: false,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your needs. All plans include access to our core features to help reduce your website's carbon footprint.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find answers to common questions about our plans and features.</p>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I upgrade or downgrade my plan later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be effective immediately for upgrades and at the end of your billing cycle for downgrades.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards including Visa, Mastercard, and American Express. We also support payment through PayPal.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Is there a contract or commitment?</h3>
                <p className="text-gray-600">No, all our plans are month-to-month with no long-term contracts. You can cancel at any time.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">How do you calculate carbon emissions?</h3>
                <p className="text-gray-600">We use a comprehensive model that considers factors like page weight, server location, energy sources, and estimated traffic to calculate the carbon footprint of your website.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
