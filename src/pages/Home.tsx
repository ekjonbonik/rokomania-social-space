
import React from 'react';
import { Play, Users, Target, Heart, ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: 'Strong Community',
      description: 'Connect with like-minded individuals and build lasting relationships.'
    },
    {
      icon: Target,
      title: 'Clear Vision',
      description: 'We have a clear mission to empower and unite our community members.'
    },
    {
      icon: Heart,
      title: 'Supportive Environment',
      description: 'A safe and supportive space for everyone to share and grow.'
    }
  ];

  const visions = [
    {
      title: 'Unity',
      description: 'Bringing people together regardless of their background.'
    },
    {
      title: 'Growth',
      description: 'Fostering personal and professional development.'
    },
    {
      title: 'Innovation',
      description: 'Embracing new ideas and creative solutions.'
    },
    {
      title: 'Impact',
      description: 'Making a positive difference in society.'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400'
  ];

  const blogPosts = [
    {
      title: 'Building Strong Communities',
      excerpt: 'Learn how we foster connections and build lasting relationships within our community.',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300'
    },
    {
      title: 'The Power of Unity',
      excerpt: 'Discover how unity can drive positive change and create meaningful impact.',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300'
    },
    {
      title: 'Innovation in Community Building',
      excerpt: 'Exploring new ways to connect and engage with our community members.',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t('hero_title')}
              </h1>
              <p className="text-xl text-blue-100">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    {t('register')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Play className="mr-2 h-4 w-4" /> Watch Video
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                  <Play className="h-16 w-16 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('why_us_title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide a unique platform that brings people together and creates meaningful connections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('visions_title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our core values and aspirations that drive us forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visions.map((vision, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {vision.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {vision.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('gallery_title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Moments and memories from our vibrant community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('blog_title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay updated with our latest news, stories, and insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
