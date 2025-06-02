
import React from 'react';
import { Save, Bell, Shield, Database, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminLayout from '../../components/AdminLayout';

const AdminSettings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage system settings and configurations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Site Name</label>
                <Input defaultValue="OnnoRokom Community" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Site Description</label>
                <Textarea 
                  defaultValue="A vibrant community platform connecting people from all walks of life"
                  className="min-h-[80px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Default Language</label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="bn">বাংলা</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <Select defaultValue="asia-dhaka">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asia-dhaka">Asia/Dhaka</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="asia-kolkata">Asia/Kolkata</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Send email notifications to users
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Send SMS notifications for important updates
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Send browser push notifications
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Digest</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Send weekly activity digest to users
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Require 2FA for all admin accounts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Session Timeout</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Auto-logout after inactivity
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Session Duration (minutes)</label>
                <Input type="number" defaultValue="30" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Login Attempts Limit</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Lock account after failed attempts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Email Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">SMTP Server</label>
                <Input placeholder="smtp.gmail.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Port</label>
                  <Input placeholder="587" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Encryption</label>
                  <Select defaultValue="tls">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tls">TLS</SelectItem>
                      <SelectItem value="ssl">SSL</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <Input placeholder="your-email@gmail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input type="password" placeholder="App password" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">From Email</label>
                <Input placeholder="noreply@onnorokom.com" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button size="lg">
            <Save className="h-4 w-4 mr-2" />
            Save All Settings
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
