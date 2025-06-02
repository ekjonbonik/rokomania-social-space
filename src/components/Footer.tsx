
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">OR</span>
              </div>
              <span className="font-bold text-xl">OnnoRokom</span>
            </Link>
            <p className="text-gray-400 text-sm">
              {t('footer_tagline')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Important Links 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('important_links')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('contact')}</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">{t('privacy_policy')}</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">{t('terms_service')}</Link></li>
            </ul>
          </div>

          {/* Important Links 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/register" className="hover:text-white transition-colors">{t('register')}</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">{t('login')}</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact_us')}</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@onnorokom.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Community Street, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 OnnoRokom Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
