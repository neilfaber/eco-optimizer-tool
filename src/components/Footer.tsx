
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 rounded-full p-1">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-green-700 dark:text-green-400">GreenAudit</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Reduce your website's carbon footprint for a greener digital future.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Pricing</Link></li>
              <li><Link to="/api" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">API</Link></li>
              <li><Link to="/certification" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Certification</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Blog</Link></li>
              <li><Link to="/docs" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Documentation</Link></li>
              <li><Link to="/case-studies" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Case Studies</Link></li>
              <li><Link to="/partners" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Hosting Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Careers</Link></li>
              <li><Link to="/legal" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} GreenAudit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
