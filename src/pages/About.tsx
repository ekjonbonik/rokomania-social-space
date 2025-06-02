
import React from 'react';
import { Target, Eye, Users, Award, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Ahmed Rahman',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: 'Visionary leader with 15+ years of experience in community building.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Fatima Khan',
      position: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b743?w=300',
      bio: 'Passionate about connecting people and fostering meaningful relationships.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Mohammad Hasan',
      position: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Technology enthusiast focused on creating innovative solutions.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Rashida Begum',
      position: 'Operations Head',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Expert in organizational management and community operations.',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About OnnoRokom Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are dedicated to building a strong, inclusive community that empowers individuals 
            to connect, grow, and make a positive impact in society.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To create a vibrant, inclusive community platform that connects individuals from diverse 
                backgrounds, fostering collaboration, learning, and mutual support. We strive to break 
                down barriers and build bridges that enable everyone to thrive and contribute to society.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading community platform that empowers individuals to unlock their potential, 
                create meaningful connections, and drive positive change. We envision a world where every 
                person has access to a supportive network that helps them grow personally and professionally.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Inclusivity', description: 'Welcoming everyone regardless of background' },
              { title: 'Authenticity', description: 'Encouraging genuine connections and real stories' },
              { title: 'Growth', description: 'Supporting continuous learning and development' },
              { title: 'Impact', description: 'Creating positive change in our communities' }
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">{value.title[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate individuals behind OnnoRokom Community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {member.position}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
