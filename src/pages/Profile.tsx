
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Award, 
  TrendingUp, 
  Droplet, 
  Calendar, 
  Globe, 
  Users, 
  LogOut,
  Upload,
  Settings,
  BadgeCheck,
  BookOpen,
  Bell
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserProfile, isUserLoggedIn, signOut, updateUserAvatar } from '../services/userService';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileStats } from '@/components/profile/ProfileStats';
import { LeaderboardCard } from '@/components/profile/LeaderboardCard';
import { WebsitesList } from '@/components/profile/WebsitesList';
import { ActivityFeed } from '@/components/profile/ActivityFeed';
import { PreferencesCard } from '@/components/profile/PreferencesCard';

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

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update avatar in profile
        updateUserAvatar(reader.result);
        setProfile({...profile, avatar: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Loading profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <ProfileHeader 
            profile={profile} 
            onSignOut={handleSignOut} 
            onAvatarUpload={handleAvatarUpload} 
          />
          
          <ProfileStats profile={profile} />
          
          <Tabs defaultValue="websites" className="mt-8">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="websites">My Websites</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="websites" className="space-y-8">
              <LeaderboardCard profile={profile} />
              <WebsitesList websites={profile.websites} navigate={navigate} />
            </TabsContent>
            
            <TabsContent value="activity" className="space-y-8">
              <ActivityFeed profile={profile} />
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-8">
              <PreferencesCard />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
