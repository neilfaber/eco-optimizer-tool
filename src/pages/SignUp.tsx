
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Leaf, Mail, Lock, User, CheckCircle2 } from 'lucide-react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate loading state
    setIsLoading(true);
    
    // For demonstration purposes, we'll simulate registration with a timeout
    setTimeout(() => {
      // In a real app, you would send the registration data to a backend service
      if (name && email && password) {
        // Simulating successful registration
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        
        toast({
          title: "Registration successful!",
          description: "Welcome to GreenAudit. Your account has been created.",
        });
        
        navigate('/dashboard');
      } else {
        toast({
          title: "Registration failed",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="bg-green-500 dark:bg-green-600 rounded-full p-2">
                <Leaf className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create your account</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Start reducing your website's carbon footprint today
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full name</Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <User className="h-5 w-5" />
                </div>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email address</Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <Mail className="h-5 w-5" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <Lock className="h-5 w-5" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Password must be at least 8 characters long
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Benefits of creating an account:</h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-green-500 dark:text-green-500 mr-2" />
                  <span>Track your website's carbon savings over time</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-green-500 dark:text-green-500 mr-2" />
                  <span>Earn eco credits for optimizations made</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-green-500 dark:text-green-500 mr-2" />
                  <span>Get personalized recommendations</span>
                </div>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
            
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/signin" className="font-medium text-green-600 dark:text-green-500 hover:text-green-800 dark:hover:text-green-400">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;
