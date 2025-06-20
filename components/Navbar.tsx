'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white shadow-lg border-b border-blue-500/20 relative z-50">
      <div className="container mx-auto mobile-container py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
              <span className="text-blue-600 font-bold text-lg sm:text-xl">A</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              AOM Aspirant
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/abbreviations" 
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Abbreviations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/notes" 
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Notes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/pdfs" 
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              PDFs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
            {session && (
              <>
              <Link 
                href="/dashboard" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                Dashboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
              href="/quiz" 
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Quizzes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
              </>
            )}
        
            <Link 
              href="/contact" 
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Auth Button */}
          <div className="hidden md:block">
            {session ? (
              <button
                onClick={handleSignOut}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-sm hover:shadow-md transform hover:scale-105 touch-button"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/"
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-sm hover:shadow-md transform hover:scale-105 touch-button"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 touch-button"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Link 
                href="/" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 touch-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 touch-button"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/abbreviations" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 touch-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Abbreviations
              </Link>
              <Link 
                href="/notes" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 touch-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Notes
              </Link>
              <Link 
                href="/pdfs" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 touch-button"
                onClick={() => setIsMenuOpen(false)}
              >
                PDFs
              </Link>

              {session && (
                <>
                <Link 
                  href="/dashboard" 
                  className="text-white/90 hover:text-white font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 touch-button"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                href="/quiz" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 touch-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Quizzes
              </Link>
                </>
              )}
              <Link 
                href="/contact" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 touch-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Auth Button */}
              <div className="pt-2 border-t border-white/20">
                {session ? (
                  <button
                    onClick={handleSignOut}
                    className="w-full bg-white/10 backdrop-blur-sm text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-sm hover:shadow-md touch-button"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/"
                    className="block w-full bg-white/10 backdrop-blur-sm text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-sm hover:shadow-md text-center touch-button"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}