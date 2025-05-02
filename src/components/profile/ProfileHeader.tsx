
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, LogOut, Upload, Edit } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileHeader = ({ profile, onSignOut, onAvatarUpload }) => {
  // Format date as Month Year (e.g., March 2023)
  const joinedDate = profile ? new Date(profile.joined).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  }) : '';

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-end justify-between">
        <div className="flex items-center gap-5">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-2xl">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <label htmlFor="avatar-upload" className="absolute -right-2 bottom-0 bg-white dark:bg-gray-800 p-1.5 rounded-full border border-gray-200 dark:border-gray-700 cursor-pointer shadow-sm">
              <Upload className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <input 
                id="avatar-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={onAvatarUpload}
              />
            </label>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{profile.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">{profile.email}</p>
            <div className="text-gray-600 dark:text-gray-400 flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1.5" />
              <span>Member since {joinedDate}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-800">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
          <Button 
            variant="outline" 
            className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
            onClick={onSignOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
};
