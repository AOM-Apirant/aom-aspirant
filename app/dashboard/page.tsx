'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface UserProgress {
  totalQuizzes: number;
  totalQuestions: number;
  correctAnswers: number;
  averageScore: number;
  accuracy: number;
  formattedStudyTime: string;
  lastActivity: string | null;
  recentActivity: Array<{
    categoryId: string;
    quizId: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    completedAt: string;
  }>;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (status === 'authenticated' && session) {
      fetchProgress();
    }
  }, [status, session]);

  const fetchProgress = async () => {
    try {
      setRefreshing(true);
      const response = await fetch('/api/progress');
      if (response.ok) {
        const data = await response.json();
        setProgress(data);
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center mobile-container">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="mobile-text text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center mobile-container">
        <div className="text-center">
          <h1 className="mobile-heading font-bold text-gray-800 mb-4">Access Denied</h1>
          <p className="mobile-text text-gray-600 mb-6">Please log in to access your dashboard.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-button focus-ring mobile-text"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const categoryNames: { [key: string]: string } = {
    'general-knowledge': 'General Knowledge',
    'geography': 'Geography',
    'science': 'Science',
    'art-culture': 'Art & Culture'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12 mobile-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <div></div>
            <h1 className="mobile-heading font-bold text-gray-800 gradient-text">
              Welcome Back, {session.user?.name}!
            </h1>
            <button
              onClick={fetchProgress}
              disabled={refreshing}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Refresh Progress"
            >
              {refreshing ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )}
            </button>
          </div>
          <p className="mobile-text text-gray-600">Here&apos;s your learning progress and quick actions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-slide-in-left">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mobile-text">Total Quizzes</p>
                <p className="text-3xl font-bold text-blue-600">{progress?.totalQuizzes || 0}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mobile-text">Average Score</p>
                <p className="text-3xl font-bold text-green-600">{progress?.averageScore || 0}%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-slide-in-right" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mobile-text">Questions Answered</p>
                <p className="text-3xl font-bold text-purple-600">{progress?.totalQuestions || 0}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-slide-in-right">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mobile-text">Study Time</p>
                <p className="text-3xl font-bold text-orange-600">{progress?.formattedStudyTime || '0m'}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 sm:mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Link
                href="/quiz"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-200 touch-button focus-ring"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Start New Quiz</h3>
                    <p className="text-gray-600 text-sm">Challenge yourself with new questions</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/about"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:from-green-100 hover:to-blue-100 transition-all duration-200 touch-button focus-ring"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Learn More</h3>
                    <p className="text-gray-600 text-sm">Discover our platform features</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {progress?.recentActivity && progress.recentActivity.length > 0 ? (
                progress.recentActivity.map((activity, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">
                        {categoryNames[activity.categoryId] || activity.categoryId} - Quiz {activity.quizId}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.score >= 80 ? 'bg-green-100 text-green-700' :
                        activity.score >= 60 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {activity.score}%
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {activity.correctAnswers} out of {activity.totalQuestions} correct
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {new Date(activity.completedAt).toLocaleDateString()} at {new Date(activity.completedAt).toLocaleTimeString()}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-600 mobile-text">No recent activity</p>
                  <p className="text-gray-500 text-sm">Start your first quiz to see your activity here!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Motivation Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-lg mobile-padding text-white animate-fade-in-up">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Keep Learning!</h2>
            <p className="mobile-text mb-6 opacity-90">
              Every quiz you take brings you one step closer to mastering new knowledge.
              Stay curious and keep challenging yourself!
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-white text-blue-600 py-4 px-8 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-button focus-ring mobile-text"
            >
              Start Learning Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 