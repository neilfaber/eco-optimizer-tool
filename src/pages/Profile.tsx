
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Droplet, Calendar, Globe, Users, LogOut } from 'lucide-react';
import { getUserProfile, isUserLoggedIn, signOut } from '../services/userService';

const ProfileCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-center">
      <div className={`rounded-full p-3 ${color} mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

const WebsiteCard = ({ website }) => {
  const scoreImprovement = website.currentScore - website.initialScore;
  const formattedDate = new Date(website.lastScan).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-900">{website.url}</h3>
        <div className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium">
          {scoreImprovement > 0 ? `+${scoreImprovement}` : scoreImprovement} points
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-500 text-sm">Current Score</p>
          <p className="text-xl font-bold text-gray-800">{website.currentScore}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">CO₂ Saved</p>
          <p className="text-xl font-bold text-green-600">{website.carbonSaved.toFixed(1)}kg</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-500 text-sm mb-2">Optimizations</p>
        <div className="flex flex-wrap gap-2">
          {website.optimizationsDone.map((opt, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs">
              {opt}
            </span>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        Last scan: {formattedDate}
      </div>
    </div>
  );
};

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    if (!isUserLoggedIn()) {
      navigate('/signin');
      return;
    }
    
    // Load user profile
    setProfile(getUserProfile());
    setIsLoading(false);
  }, [navigate]);
  
  const handleSignOut = () => {
    signOut();
    navigate('/');
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Format date as Month Year (e.g., March 2023)
  const joinedDate = profile ? new Date(profile.joined).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  }) : '';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
              <div className="text-gray-600 flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                <span>Member since {joinedDate}</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="text-gray-700 border-gray-300"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <ProfileCard 
              title="Eco Credits"
              value={profile.ecoCredits}
              icon={<Award className="h-6 w-6 text-yellow-600" />}
              color="bg-yellow-100"
            />
            <ProfileCard 
              title="Carbon Saved"
              value={`${profile.carbonSaved.toFixed(1)}kg`}
              icon={<Droplet className="h-6 w-6 text-blue-600" />}
              color="bg-blue-100"
            />
            <ProfileCard 
              title="Optimizations"
              value={profile.optimizationsCompleted}
              icon={<TrendingUp className="h-6 w-6 text-green-600" />}
              color="bg-green-100"
            />
            <ProfileCard 
              title="Websites"
              value={profile.websites.length}
              icon={<Globe className="h-6 w-6 text-indigo-600" />}
              color="bg-indigo-100"
            />
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Carbon Impact Leaderboard</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">You</p>
                    <p className="text-sm text-gray-600">{profile.carbonSaved.toFixed(1)}kg CO₂ saved</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                  Rank #42
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Global Average</p>
                    <p className="text-sm text-gray-600">87.3kg CO₂ saved</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  +30.9kg needed
                </div>
              </div>
              
              <div className="text-center mt-2">
                <p className="text-sm text-gray-600">
                  Complete more optimizations to climb the leaderboard and earn bonus eco credits!
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">My Websites</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profile.websites.map((website, index) => (
                <WebsiteCard key={index} website={website} />
              ))}
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                <Globe className="h-10 w-10 text-gray-400 mb-3" />
                <h3 className="font-medium text-gray-800 mb-2">Add another website</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Scan another website to analyze its carbon footprint
                </p>
                <Button 
                  variant="outline" 
                  className="border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => navigate('/scan')}
                >
                  Add website
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
