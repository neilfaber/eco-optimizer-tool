
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, ArrowUpRight, Calendar } from 'lucide-react';

export const ActivityFeed = ({ profile }) => {
  // Generate mock activity data based on the user's profile
  const activities = [
    {
      id: 1,
      type: 'optimization',
      title: 'Completed image optimization',
      website: 'example.com',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      points: 15,
      carbonSaved: 2.4
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Earned Green Pioneer Badge',
      description: 'Reached 50kg CO₂ saved',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 7 days ago
    },
    {
      id: 3,
      type: 'scan',
      title: 'Scanned new website',
      website: 'myothersite.org',
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) // 14 days ago
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {activities.map((activity) => (
            <div key={activity.id} className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 p-2 rounded-full 
                    ${activity.type === 'optimization' ? 'bg-green-100 dark:bg-green-900/30' : 
                      activity.type === 'achievement' ? 'bg-yellow-100 dark:bg-yellow-900/30' : 
                      'bg-blue-100 dark:bg-blue-900/30'}`}
                  >
                    {activity.type === 'optimization' ? 
                      <ArrowUpRight className="h-4 w-4 text-green-600 dark:text-green-500" /> :
                      activity.type === 'achievement' ? 
                      <BadgeCheck className="h-4 w-4 text-yellow-600 dark:text-yellow-500" /> :
                      <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                    }
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{activity.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.website && <span>Website: {activity.website}</span>}
                      {activity.description && <span>{activity.description}</span>}
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {activity.date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  {activity.points && (
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 hover:bg-green-100">
                      +{activity.points} points
                    </Badge>
                  )}
                  {activity.carbonSaved && (
                    <div className="text-xs text-green-600 dark:text-green-500 mt-1 text-right">
                      {activity.carbonSaved}kg CO₂ saved
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
