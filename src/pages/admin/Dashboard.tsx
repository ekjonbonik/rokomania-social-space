
import React from 'react';
import { Users, UserCheck, UserX, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '../../components/AdminLayout';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Users',
      value: '1,108',
      change: '+8%',
      changeType: 'positive',
      icon: UserCheck,
      color: 'green'
    },
    {
      title: 'Inactive Users',
      value: '126',
      change: '-4%',
      changeType: 'negative',
      icon: UserX,
      color: 'red'
    },
    {
      title: 'Growth Rate',
      value: '15.3%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const recentUsers = [
    { name: 'Ahmed Rahman', email: 'ahmed@example.com', joinedAt: '2024-01-15', status: 'Active' },
    { name: 'Fatima Khan', email: 'fatima@example.com', joinedAt: '2024-01-14', status: 'Active' },
    { name: 'Mohammad Hasan', email: 'hasan@example.com', joinedAt: '2024-01-13', status: 'Pending' },
    { name: 'Rashida Begum', email: 'rashida@example.com', joinedAt: '2024-01-12', status: 'Active' },
    { name: 'Karim Ali', email: 'karim@example.com', joinedAt: '2024-01-11', status: 'Active' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Welcome to OnnoRokom Community Admin Panel</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(stat.color)}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        user.status === 'Active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {user.status}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {new Date(user.joinedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">Activity Chart</p>
                  <p className="text-sm text-gray-400">Charts will be integrated with real data</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
