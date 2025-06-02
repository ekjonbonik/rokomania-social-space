
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Calendar, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '+880 1234-567890',
    otherMobile: '+880 9876-543210',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    homeDistrict: 'Dhaka',
    religion: 'Islam',
    maritalStatus: 'Single',
    address: '123 Main Street, Dhanmondi, Dhaka 1205',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
  });

  const professionalInfo = [
    {
      jobTitle: 'Senior Software Engineer',
      organization: 'Tech Solutions Ltd.',
      jobDetails: 'Leading development of web applications using React and Node.js',
      currentlyWorking: true,
      startDate: '2022-01-15',
      endDate: '',
      location: 'Dhaka'
    },
    {
      jobTitle: 'Software Developer',
      organization: 'Digital Agency Inc.',
      jobDetails: 'Developed mobile applications and web platforms',
      currentlyWorking: false,
      startDate: '2020-03-01',
      endDate: '2021-12-31',
      location: 'Chittagong'
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
    console.log('Profile saved:', profileData);
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={profileData.profilePicture} alt={profileData.name} />
                  <AvatarFallback className="text-2xl">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {profileData.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    OnnoRokom Community Member
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => setIsEditing(!isEditing)}
                      variant={isEditing ? "outline" : "default"}
                    >
                      {isEditing ? (
                        <>
                          <X className="mr-2 h-4 w-4" /> Cancel
                        </>
                      ) : (
                        <>
                          <Edit className="mr-2 h-4 w-4" /> Edit Profile
                        </>
                      )}
                    </Button>
                    {isEditing && (
                      <Button onClick={handleSave}>
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    {isEditing ? (
                      <Input
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Date of Birth</label>
                    {isEditing ? (
                      <Input
                        type="date"
                        value={profileData.dateOfBirth}
                        onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        {new Date(profileData.dateOfBirth).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Gender</label>
                    <p className="text-gray-900 dark:text-white">{profileData.gender}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Home District</label>
                    <p className="text-gray-900 dark:text-white">{profileData.homeDistrict}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Religion</label>
                    <p className="text-gray-900 dark:text-white">{profileData.religion}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Marital Status</label>
                    <p className="text-gray-900 dark:text-white">{profileData.maritalStatus}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Address</label>
                  {isEditing ? (
                    <Textarea
                      value={profileData.address}
                      onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{profileData.address}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Primary Mobile</label>
                  {isEditing ? (
                    <Input
                      type="tel"
                      value={profileData.mobile}
                      onChange={(e) => setProfileData({ ...profileData, mobile: e.target.value })}
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{profileData.mobile}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Other Mobile</label>
                  {isEditing ? (
                    <Input
                      type="tel"
                      value={profileData.otherMobile}
                      onChange={(e) => setProfileData({ ...profileData, otherMobile: e.target.value })}
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{profileData.otherMobile}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Professional Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {professionalInfo.map((job, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {job.jobTitle}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {job.organization}
                        </p>
                        {job.currentlyWorking && (
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-2">
                            Currently Working
                          </span>
                        )}
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(job.startDate).toLocaleDateString()} - {job.currentlyWorking ? 'Present' : new Date(job.endDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{job.jobDetails}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
