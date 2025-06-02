
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Plus, X, Upload, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mobile: '',
    otp: '',
    name: '',
    dateOfBirth: '',
    year: '',
    gender: '',
    homeDistrict: '',
    religion: '',
    maritalStatus: '',
    email: '',
    otherMobile: '',
    address: '',
    professionalInfo: [{
      jobTitle: '',
      organization: '',
      jobDetails: '',
      currentlyWorking: false,
      startDate: '',
      endDate: '',
      location: ''
    }],
    profilePicture: null
  });

  const districts = [
    'Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal', 'Rangpur', 'Mymensingh',
    'Comilla', 'Gazipur', 'Narayanganj', 'Cumilla', 'Feni', 'Brahmanbaria', 'Noakhali'
  ];

  const addProfessionalInfo = () => {
    setFormData({
      ...formData,
      professionalInfo: [...formData.professionalInfo, {
        jobTitle: '',
        organization: '',
        jobDetails: '',
        currentlyWorking: false,
        startDate: '',
        endDate: '',
        location: ''
      }]
    });
  };

  const removeProfessionalInfo = (index: number) => {
    const newProfessionalInfo = formData.professionalInfo.filter((_, i) => i !== index);
    setFormData({ ...formData, professionalInfo: newProfessionalInfo });
  };

  const updateProfessionalInfo = (index: number, field: string, value: any) => {
    const newProfessionalInfo = [...formData.professionalInfo];
    newProfessionalInfo[index] = { ...newProfessionalInfo[index], [field]: value };
    setFormData({ ...formData, professionalInfo: newProfessionalInfo });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Mobile Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Mobile Number</label>
                <Input
                  type="tel"
                  placeholder="+880 1234-567890"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>
              <Button onClick={() => setStep(2)} className="w-full">
                Send OTP <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Enter OTP</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">OTP Code</label>
                <Input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={formData.otp}
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(3)} className="flex-1">
                  Verify <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth</label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Gender</label>
                  <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Home District</label>
                  <Select value={formData.homeDistrict} onValueChange={(value) => setFormData({ ...formData, homeDistrict: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>{district}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Religion</label>
                  <Select value={formData.religion} onValueChange={(value) => setFormData({ ...formData, religion: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select religion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="islam">Islam</SelectItem>
                      <SelectItem value="hinduism">Hinduism</SelectItem>
                      <SelectItem value="buddhism">Buddhism</SelectItem>
                      <SelectItem value="christianity">Christianity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Marital Status</label>
                  <Select value={formData.maritalStatus} onValueChange={(value) => setFormData({ ...formData, maritalStatus: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Other Mobile Number</label>
                  <Input
                    type="tel"
                    placeholder="+880 1234-567890"
                    value={formData.otherMobile}
                    onChange={(e) => setFormData({ ...formData, otherMobile: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <Textarea
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(4)} className="flex-1">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {formData.professionalInfo.map((info, index) => (
                <div key={index} className="border rounded-lg p-6 space-y-4 relative">
                  {formData.professionalInfo.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeProfessionalInfo(index)}
                      className="absolute top-2 right-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                  
                  <h3 className="font-semibold">Job #{index + 1}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Title</label>
                      <Input
                        placeholder="e.g., Software Engineer"
                        value={info.jobTitle}
                        onChange={(e) => updateProfessionalInfo(index, 'jobTitle', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Organization</label>
                      <Input
                        placeholder="Company/Organization name"
                        value={info.organization}
                        onChange={(e) => updateProfessionalInfo(index, 'organization', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Job Details</label>
                    <Textarea
                      placeholder="Describe your role and responsibilities"
                      value={info.jobDetails}
                      onChange={(e) => updateProfessionalInfo(index, 'jobDetails', e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={info.currentlyWorking}
                      onCheckedChange={(checked) => updateProfessionalInfo(index, 'currentlyWorking', checked)}
                    />
                    <label className="text-sm font-medium">Currently working here</label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Date</label>
                      <Input
                        type="date"
                        value={info.startDate}
                        onChange={(e) => updateProfessionalInfo(index, 'startDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">End Date</label>
                      <Input
                        type="date"
                        disabled={info.currentlyWorking}
                        value={info.endDate}
                        onChange={(e) => updateProfessionalInfo(index, 'endDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <Select
                        value={info.location}
                        onValueChange={(value) => updateProfessionalInfo(index, 'location', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          {districts.map((district) => (
                            <SelectItem key={district} value={district}>{district}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                variant="outline"
                onClick={addProfessionalInfo}
                className="w-full"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Another Job
              </Button>

              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(5)} className="flex-1">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-gray-400" />
                </div>
                <Button variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" /> Upload Photo
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  Upload a clear photo of yourself (optional)
                </p>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setStep(4)} className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(6)} className="flex-1">
                  Complete <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 6:
        return (
          <Card className="w-full max-w-md mx-auto text-center">
            <CardContent className="py-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Registration Successful!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Welcome to OnnoRokom Community! Your account has been created successfully.
              </p>
              <Button onClick={() => window.location.href = '/profile'} className="w-full">
                Go to Profile
              </Button>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join OnnoRokom Community
          </h1>
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i}
                  </div>
                  {i < 6 && (
                    <div className={`w-8 h-1 ${
                      i < step ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default Register;
