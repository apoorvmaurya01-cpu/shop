import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Prem Misthan Bhandar</h3>
            <p className="text-sm text-gray-400">
              Experience the authentic taste of Lucknowi sweets and chaats. Serving traditional delicacies since generations.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook size={20} className="hover:text-white cursor-pointer" />
              <Instagram size={20} className="hover:text-white cursor-pointer" />
              <Twitter size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <p>Chowk, Lucknow, Uttar Pradesh 226003</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <p>info@premmisthanbandar.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm">
              <p>Open All Days</p>
              <p className="font-semibold text-white">3:00 PM - 11:00 PM</p>
              <p className="text-gray-400 text-xs mt-4">
                During festivals and special occasions, we may have extended hours.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2026 Prem Misthan Bhandar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}