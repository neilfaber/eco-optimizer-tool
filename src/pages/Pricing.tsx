
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Info, Shield, Zap, BarChart4, Award } from 'lucide-react';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  ctaText, 
  ctaLink, 
  highlighted = false,
  icon: Icon
}) => {
  return (
    <div className={`rounded-xl p-8 ${highlighted ? 'border-2 border-green-500 dark:border-green-400 shadow-xl' : 'border border-gray-200 dark:border-gray-700'} flex flex-col h-full bg-white dark:bg-gray-800`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-full ${highlighted ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        {highlighted && (
          <span className="ml-auto bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Popular
          </span>
        )}
      </div>
      
      <div className="mb-6">
        <div className="flex items-end">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">${price}</span>
          {price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>}
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link to={ctaLink} className="mt-auto">
        <Button 
          className={`w-full ${highlighted 
            ? 'bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white' 
            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
        >
          {ctaText}
        </Button>
      </Link>
    </div>
  );
};

const PricingComparison = () => {
  return (
    <div className="mt-16 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Compare Plans Features</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-4 px-4 text-left text-gray-600 dark:text-gray-400 font-medium">Feature</th>
              <th className="py-4 px-4 text-center text-gray-600 dark:text-gray-400 font-medium">Free</th>
              <th className="py-4 px-4 text-center text-gray-600 dark:text-gray-400 font-medium">Pro</th>
              <th className="py-4 px-4 text-center text-gray-600 dark:text-gray-400 font-medium">Business</th>
              <th className="py-4 px-4 text-center text-gray-600 dark:text-gray-400 font-medium">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-4 text-gray-800 dark:text-gray-200">Website Scans</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">3/month</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Unlimited</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Unlimited</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Unlimited</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-4 text-gray-800 dark:text-gray-200">Detailed Reports</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Basic</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Advanced</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Advanced</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Advanced</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-4 text-gray-800 dark:text-gray-200">One-Click Optimizations</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">-</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-4 text-gray-800 dark:text-gray-200">Eco-Score Badge</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">-</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-4 text-gray-800 dark:text-gray-200">API Access</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">-</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">-</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-4 text-gray-800 dark:text-gray-200">Team Members</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">1</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">3</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">10</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Unlimited</td>
            </tr>
            <tr>
              <td className="py-4 px-4 text-gray-800 dark:text-gray-200">Priority Support</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">-</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">-</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
              <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sustainable Pricing for a Greener Web</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the right plan to reduce your website's carbon footprint and improve performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PricingTier 
              name="Free" 
              price="0" 
              description="Get started with basic scans"
              features={[
                "3 Website scans per month",
                "Basic optimization suggestions",
                "Energy efficiency report",
                "Carbon footprint calculation"
              ]}
              ctaText="Start Free"
              ctaLink="/scan"
              icon={Info}
            />
            
            <PricingTier 
              name="Pro" 
              price="29" 
              description="Perfect for small businesses"
              features={[
                "Unlimited scans",
                "Advanced optimization suggestions",
                "One-click fixes for common issues",
                "Website eco-certification badge",
                "Energy monitoring dashboard"
              ]}
              ctaText="Choose Pro"
              ctaLink="/scan"
              highlighted={true}
              icon={Zap}
            />
            
            <PricingTier 
              name="Business" 
              price="99" 
              description="For growing organizations"
              features={[
                "Everything in Pro",
                "API access",
                "Advanced carbon analytics",
                "Multiple website management",
                "Custom reporting",
                "10 team members",
                "Priority support"
              ]}
              ctaText="Choose Business"
              ctaLink="/scan"
              icon={BarChart4}
            />
            
            <PricingTier 
              name="Enterprise" 
              price="Custom" 
              description="For large organizations"
              features={[
                "Everything in Business",
                "Custom integration options",
                "Dedicated account manager",
                "Unlimited team members",
                "SLA guarantees",
                "White-labeled reports",
                "Custom carbon offset programs"
              ]}
              ctaText="Contact Sales"
              ctaLink="/contact"
              icon={Award}
            />
          </div>
          
          <PricingComparison />
          
          <div className="mt-16 bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border border-green-100 dark:border-green-800/50 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Need a custom solution?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Contact our team for a personalized plan tailored to your organization's needs.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white">
                Contact Sales
              </Button>
            </Link>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Can I upgrade or downgrade my plan anytime?</h3>
                <p className="text-gray-600 dark:text-gray-400">Yes, you can change your plan at any time. When upgrading, we'll prorate the remaining days in your billing cycle.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Is there a free trial for paid plans?</h3>
                <p className="text-gray-600 dark:text-gray-400">Yes, all paid plans come with a 14-day free trial, so you can test all features before committing.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Do you offer discounts for non-profits?</h3>
                <p className="text-gray-600 dark:text-gray-400">Yes, we offer a 50% discount on all plans for verified non-profit organizations. Contact us to apply.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">How do I get an Eco-Score certification badge?</h3>
                <p className="text-gray-600 dark:text-gray-400">The certification badge is available on Pro plans and above, once your website reaches a minimum eco-score of 80/100.</p>
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
