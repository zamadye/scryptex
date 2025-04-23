
import React from "react";
// Changed import from Card.tsx to cardui.tsx which has the CardDescription export
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/cardui";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application preferences and settings
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how Scryptex looks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Theme</label>
                <div className="flex mt-2 space-x-2">
                  <Button variant="outline" className="flex-1">Light</Button>
                  <Button variant="outline" className="flex-1">Dark</Button>
                  <Button variant="outline" className="flex-1">System</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="font-medium">Compact Mode</p>
                  <p className="text-sm text-gray-500">Use smaller UI elements</p>
                </div>
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-scryptex-blue rounded"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Configure your notification preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Project Analysis Updates</p>
                  <p className="text-sm text-gray-500">Get notified when analysis completes</p>
                </div>
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-scryptex-blue rounded"
                    defaultChecked
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Credit Balance Alerts</p>
                  <p className="text-sm text-gray-500">Notify when credits are low</p>
                </div>
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-scryptex-blue rounded"
                    defaultChecked
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Feature Announcements</p>
                  <p className="text-sm text-gray-500">Learn about new Scryptex features</p>
                </div>
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-scryptex-blue rounded"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Data & Privacy</CardTitle>
            <CardDescription>Control your data and privacy settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Usage Data Collection</p>
                  <p className="text-sm text-gray-500">Allow collection of anonymous usage data</p>
                </div>
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-scryptex-blue rounded"
                    defaultChecked
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Search History</p>
                  <p className="text-sm text-gray-500">Save your search history</p>
                </div>
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-scryptex-blue rounded"
                    defaultChecked
                  />
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Download My Data
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage account security settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Button variant="outline" className="w-full">
                  Change Password
                </Button>
              </div>
              
              <div>
                <Button variant="outline" className="w-full">
                  Setup Two-Factor Authentication
                </Button>
              </div>
              
              <div>
                <Button variant="outline" className="w-full">
                  Manage Connected Devices
                </Button>
              </div>
              
              <div className="pt-2">
                <Button variant="destructive" className="w-full">
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
