
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Mail, Globe, Shield, Save } from 'lucide-react';

export const PreferencesCard = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [achievementAlerts, setAchievementAlerts] = useState(true);
  const [language, setLanguage] = useState('english');
  const [timezone, setTimezone] = useState('UTC');

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Account Preferences</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center mb-4">
              <Bell className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
              Notification Settings
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="flex-grow cursor-pointer">
                  <div className="font-medium text-gray-700 dark:text-gray-300">Email Notifications</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive important updates via email</p>
                </Label>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="weekly-reports" className="flex-grow cursor-pointer">
                  <div className="font-medium text-gray-700 dark:text-gray-300">Weekly Reports</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Get a weekly summary of your website performance</p>
                </Label>
                <Switch
                  id="weekly-reports"
                  checked={weeklyReports}
                  onCheckedChange={setWeeklyReports}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="achievement-alerts" className="flex-grow cursor-pointer">
                  <div className="font-medium text-gray-700 dark:text-gray-300">Achievement Alerts</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Be notified when you earn badges or reach milestones</p>
                </Label>
                <Switch
                  id="achievement-alerts"
                  checked={achievementAlerts}
                  onCheckedChange={setAchievementAlerts}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center mb-4">
              <Globe className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
              Regional Settings
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="language" className="text-gray-700 dark:text-gray-300">Language</Label>
                <select 
                  id="language" 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone" className="text-gray-700 dark:text-gray-300">Timezone</Label>
                <select 
                  id="timezone" 
                  value={timezone} 
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time (EST)</option>
                  <option value="CST">Central Time (CST)</option>
                  <option value="PST">Pacific Time (PST)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              Save Preferences
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
