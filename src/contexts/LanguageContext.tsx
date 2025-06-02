
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    hero_title: 'Join OnnoRokom Community',
    hero_subtitle: 'Connect, Share, and Grow Together',
    why_us_title: 'Why Choose Us?',
    visions_title: 'Our Visions',
    gallery_title: 'Community Gallery',
    blog_title: 'Latest Blog Posts',
    footer_tagline: 'Building a stronger community together',
    important_links: 'Important Links',
    privacy_policy: 'Privacy Policy',
    terms_service: 'Terms of Service',
    contact_us: 'Contact Us',
    phone: 'Phone',
    email: 'Email',
    address: 'Address'
  },
  bn: {
    home: 'হোম',
    about: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    login: 'লগইন',
    register: 'নিবন্ধন',
    hero_title: 'অন্যরকম কমিউনিটিতে যোগ দিন',
    hero_subtitle: 'সংযুক্ত হন, ভাগাভাগি করুন এবং একসাথে বেড়ে উঠুন',
    why_us_title: 'কেন আমাদের বেছে নিবেন?',
    visions_title: 'আমাদের দৃষ্টিভঙ্গি',
    gallery_title: 'কমিউনিটি গ্যালারি',
    blog_title: 'সর্বশেষ ব্লগ পোস্ট',
    footer_tagline: 'একসাথে একটি শক্তিশালী কমিউনিটি গড়ে তোলা',
    important_links: 'গুরুত্বপূর্ণ লিঙ্ক',
    privacy_policy: 'গোপনীয়তা নীতি',
    terms_service: 'সেবার শর্তাবলী',
    contact_us: 'যোগাযোগ করুন',
    phone: 'ফোন',
    email: 'ইমেইল',
    address: 'ঠিকানা'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
