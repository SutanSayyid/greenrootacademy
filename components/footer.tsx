import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-mint-light" />
              <span className="ml-2 text-xl font-heading font-bold">
                GreenRoot Academy
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Learn tech skills while making a positive impact on the environment.
              Your education funds the planet's future.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-mint-light">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-mint-light">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-mint-light">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-mint-light">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-mint-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-mint-light">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-mint-light">
                  Impact Dashboard
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-mint-light">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-mint-light">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mint-light">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mint-light">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mint-light">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-mint-light" />
                <a href="mailto:info@greenroot.edu" className="text-gray-300 hover:text-mint-light">
                  info@greenroot.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-mint-light" />
                <a href="tel:+902121234567" className="text-gray-300 hover:text-mint-light">
                  +90 212 123 4567
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-mint-light mt-1" />
                <span className="text-gray-300">
                  Tech Innovation District, Istanbul, Türkiye
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GreenRoot Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-mint-light">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-mint-light">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-mint-light">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}