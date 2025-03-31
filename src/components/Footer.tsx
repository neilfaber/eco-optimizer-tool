
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 rounded-full p-1">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-green-700">GreenAudit</span>
            </div>
            <p className="text-gray-600 text-sm">
              Reduce your website's carbon footprint for a greener digital future.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-600 hover:text-green-600">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-green-600">Pricing</Link></li>
              <li><Link to="/api" className="text-gray-600 hover:text-green-600">API</Link></li>
              <li><Link to="/certification" className="text-gray-600 hover:text-green-600">Certification</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
              <li><Link to="/docs" className="text-gray-600 hover:text-green-600">Documentation</Link></li>
              <li><Link to="/case-studies" className="text-gray-600 hover:text-green-600">Case Studies</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-green-600">Hosting Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/profile" className="text-gray-600 hover:text-green-600">My Profile</Link></li>
              <li><Link to="/signin" className="text-gray-600 hover:text-green-600">Sign In</Link></li>
              <li><Link to="/signup" className="text-gray-600 hover:text-green-600">Sign Up</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-green-600">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GreenAudit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-green-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-green-600">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-gray-500 hover:text-green-600">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
