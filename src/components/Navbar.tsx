
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Leaf, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  
  useEffect(() => {
    // Apply dark mode to the document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-green-500 rounded-full p-1.5">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-green-700 dark:text-green-400">GreenAudit</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'}`}>
            Home
          </Link>
          <Link to="/features" className={`transition-colors ${location.pathname === '/features' ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'}`}>
            Features
          </Link>
          <Link to="/pricing" className={`transition-colors ${location.pathname === '/pricing' ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'}`}>
            Pricing
          </Link>
          <Link to="/about" className={`transition-colors ${location.pathname === '/about' ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'}`}>
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link to="/dashboard">
            <Button variant="outline" className="border-green-500 text-green-600 dark:text-green-400 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/20">
              Dashboard
            </Button>
          </Link>
          <Link to="/scan">
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white">
              Scan Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
