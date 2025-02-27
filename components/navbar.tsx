"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Menu, 
  X, 
  BookOpen, 
  BarChart3, 
  User, 
  LogIn 
} from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-heading font-bold text-forest-dark">
                GreenRoot Academy
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/courses" className="text-charcoal hover:text-primary px-3 py-2 rounded-md font-medium">
              Courses
            </Link>
            <Link href="/dashboard" className="text-charcoal hover:text-primary px-3 py-2 rounded-md font-medium">
              Impact Dashboard
            </Link>
            <Link href="/profile" className="text-charcoal hover:text-primary px-3 py-2 rounded-md font-medium">
              Profile
            </Link>
            <Button variant="default" className="ml-4">
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <Link 
              href="/courses" 
              className="flex items-center text-charcoal hover:text-primary hover:bg-mint-light px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Courses
            </Link>
            <Link 
              href="/dashboard" 
              className="flex items-center text-charcoal hover:text-primary hover:bg-mint-light px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Impact Dashboard
            </Link>
            <Link 
              href="/profile" 
              className="flex items-center text-charcoal hover:text-primary hover:bg-mint-light px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="mr-2 h-5 w-5" />
              Profile
            </Link>
            <Button variant="default" className="w-full mt-4">
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}