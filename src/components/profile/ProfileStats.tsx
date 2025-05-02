
import React from 'react';
import { Award, TrendingUp, Droplet, Globe } from 'lucide-react';

const ProfileCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 flex items-center">
      <div className={`rounded-full p-3 ${color} mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
        <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
      </div>
    </div>
  );
};

export const ProfileStats = ({ profile }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProfileCard 
        title="Eco Credits"
        value={profile.ecoCredits}
        icon={<Award className="h-6 w-6 text-yellow-600" />}
        color="bg-yellow-100 dark:bg-yellow-900/30"
      />
      <ProfileCard 
        title="Carbon Saved"
        value={`${profile.carbonSaved.toFixed(1)}kg`}
        icon={<Droplet className="h-6 w-6 text-blue-600" />}
        color="bg-blue-100 dark:bg-blue-900/30"
      />
      <ProfileCard 
        title="Optimizations"
        value={profile.optimizationsCompleted}
        icon={<TrendingUp className="h-6 w-6 text-green-600" />}
        color="bg-green-100 dark:bg-green-900/30"
      />
      <ProfileCard 
        title="Websites"
        value={profile.websites.length}
        icon={<Globe className="h-6 w-6 text-indigo-600" />}
        color="bg-indigo-100 dark:bg-indigo-900/30"
      />
    </div>
  );
};
