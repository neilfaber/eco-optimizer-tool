
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Leaf, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-green-500 rounded-full p-1.5">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-green-700">GreenAudit</span>
        </Link>
        
        {/* Desktop Navigation */}
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
        </div>
        
        {/* Desktop CTA and User Buttons */}
        <div className="hidden md:flex items-center space-x-3">
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
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-gray-600 hover:text-green-600" />
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-3 px-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/scan" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Scan Now
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Profile
            </Link>
            <Link 
              to="/signin" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
