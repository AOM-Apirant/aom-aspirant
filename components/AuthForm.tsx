'use client';

import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Form */}
      <div className="animate-slide-in-left">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>

      {/* Switch Form Text */}
      <div className="mt-3 text-center animate-slide-in-right">
        <p className="text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 focus-ring touch-button"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
} 