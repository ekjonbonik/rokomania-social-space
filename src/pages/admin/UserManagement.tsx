
import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import AdminLayout from '../../components/AdminLayout';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const users = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      email: 'ahmed@example.com',
      mobile: '+880 1234-567890',
      district: 'Dhaka',
      status: 'Active',
      joinedAt: '2024-01-15',
      lastLogin: '2024-01-20'
    },
    {
      id: 2,
      name: 'Fatima Khan',
      email: 'fatima@example.com',
      mobile: '+880 1234-567891',
      district: 'Chittagong',
      status: 'Active',
      joinedAt: '2024-01-14',
      lastLogin: '2024-01-19'
    },
    {
      id: 3,
      name: 'Mohammad Hasan',
      email: 'hasan@example.com',
      mobile: '+880 1234-567892',
      district: 'Sylhet',
      status: 'Pending',
      joinedAt: '2024-01-13',
      lastLogin: null
    },
    {
      id: 4,
      name: 'Rashida Begum',
      email: 'rashida@example.com',
      mobile: '+880 1234-567893',
      district: 'Rajshahi',
      status: 'Active',
      joinedAt: '2024-01-12',
      lastLogin: '2024-01-18'
    },
    {
      id: 5,
      name: 'Karim Ali',
      email: 'karim@example.com',
      mobile: '+880 1234-567894',
      district: 'Khulna',
      status: 'Inactive',
      joinedAt: '2024-01-11',
      lastLogin: '2024-01-15'
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.mobile.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    const variants = {
      'Active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Inactive': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };
    return variants[status as keyof typeof variants] || variants.Pending;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage community members</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <CardTitle>Users ({filteredUsers.length})</CardTitle>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Button variant="outline" size="default">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>District</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-gray-900 dark:text-white">{user.mobile}</p>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-gray-900 dark:text-white">{user.district}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(user.status)}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {new Date(user.joinedAt).toLocaleDateString()}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
                        </p>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
