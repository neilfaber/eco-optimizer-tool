
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users } from 'lucide-react';

export const LeaderboardCard = ({ profile }) => {
  return (
    <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Carbon Impact Leaderboard</h2>
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700">View All</Button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 flex items-center justify-between border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full mr-3">
                <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">You</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{profile.carbonSaved.toFixed(1)}kg CO₂ saved</p>
              </div>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 rounded-full px-3 py-1 text-sm font-medium">
              Rank #42
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 flex items-center justify-between border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full mr-3">
                <Users className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Global Average</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">87.3kg CO₂ saved</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              +30.9kg needed
            </div>
          </div>
          
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Complete more optimizations to climb the leaderboard and earn bonus eco credits!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
