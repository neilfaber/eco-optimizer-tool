
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-green-500 rounded-full p-1.5">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-green-700">GreenAudit</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-green-600 transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-green-600 transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/dashboard">
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
              Dashboard
            </Button>
          </Link>
          <Link to="/scan">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Scan Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
