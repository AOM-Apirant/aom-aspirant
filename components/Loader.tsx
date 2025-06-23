'use client';

import { useEffect, useState } from 'react';

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    } else {
      // Add a small delay before hiding to ensure smooth transition
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center animate-fade-in animate-backdrop-blur">
      <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 max-w-sm w-full mx-4 animate-scale-in">
        <div className="text-center">
          {/* Animated Logo */}
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            {/* Rotating ring */}
            <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
          
          {/* Loading text */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 animate-fade-in">Loading...</h3>
          <p className="text-gray-600 text-sm animate-fade-in">Please wait while we prepare your content</p>
          
          {/* Progress dots with improved animation */}
          <div className="flex justify-center space-x-1 mt-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce-delayed"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce-delayed"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce-delayed"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 