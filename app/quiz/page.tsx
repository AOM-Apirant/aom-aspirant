import { auth } from '@/lib/auth';
import Link from 'next/link';
import UserAvatar from '@/components/UserAvatar';

export default async function Quiz() {
  const session = await auth();

  const quizCategories = [
    {
      id: 'gsr',
      title: 'G & SR Rules',
      description: 'Test your general knowledge with 5 quizzes covering various topics',
      icon: '🧠',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      quizzes: 5
    },
    {
      id: 'operating',
      title: 'Operating Department',
      description: 'Explore world operating department with 5 quizzes about countries, capitals, and landmarks',
      icon: '🌍',
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      quizzes: 5
    },
    {
      id: 'commercial',
      title: 'Commercial Department',
      description: 'Discover commercial facts with 5 quizzes about chemistry, physics, and biology',
      icon: '🔬',
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-600 to-red-700',
      quizzes: 5
    },
    {
      id: 'personnel',
      title: 'Personnel Department',
      description: 'Learn about famous artists and cultural works with 5 quizzes',
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'from-pink-600 to-pink-700',
      quizzes: 5
    },
    {
      id: 'operating-manual',
      title: 'Operating Manual',
      description: 'Test your operating manual with 5 quizzes covering various topics',
      icon: '🧠',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      quizzes: 5
    },
    {
      id: 'accident-manual',
      title: 'Accident Manual',
      description: 'Explore world accident manual with 5 quizzes about countries, capitals, and landmarks',
      icon: '🌍',
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      quizzes: 5
    },
    {
      id: 'bwm',
      title: 'Block Working Manual',
      description: 'Discover block working manual with 5 quizzes about chemistry, physics, and biology',
      icon: '🔬',
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-600 to-red-700',
      quizzes: 5
    },
    {
      id: 'rajbhasha',
      title: 'Rajbhasha',
      description: 'Learn about rajbhasha with 5 quizzes',
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'from-pink-600 to-pink-700',
      quizzes: 5
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Test your finance with 5 quizzes covering various topics',
      icon: '🧠',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      quizzes: 5
    },
    {
      id: 'rgk',
      title: 'Railway GK',
      description: 'Explore world railway gk with 5 quizzes about countries, capitals, and landmarks',
      icon: '🌍',
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      quizzes: 5
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Quiz Dashboard
          </h1>
          
          {session ? (
            <div className="flex items-center justify-center space-x-4 mb-8">
              <UserAvatar 
                userImage={session.user?.image}
                userName={session.user?.name}
                size={60}
              />
              <div className="text-left">
                <p className="text-gray-600 text-lg">
                  Welcome back, <span className="text-blue-600 font-semibold">{session.user?.name}</span>!
                </p>
                <p className="text-gray-500 text-sm">Choose a category to start your quiz journey</p>
              </div>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <p className="text-gray-600 text-lg mb-4">
                Please log in to access quizzes
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login Now
              </Link>
            </div>
          )}
        </div>

        {session && (
          <>
            {/* Quiz Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quizCategories.map((category) => (
                <div key={category.id} className="group">
                  <Link href={`/quiz/${category.id}`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 overflow-hidden cursor-pointer">
                      {/* Header */}
                      <div className={`bg-gradient-to-br ${category.color} p-8 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                        
                        <div className="relative z-10">
                          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {category.icon}
                          </div>
                          <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                          <p className="text-white/90 text-lg">{category.description}</p>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-semibold">{category.quizzes} Quizzes</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-semibold">~40 min</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Multiple choice questions</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Detailed explanations</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Progress tracking</span>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <div className={`w-full bg-gradient-to-r ${category.hoverColor} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg group-hover:shadow-xl`}>
                            <span className="text-lg">Start Category </span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quiz Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                  <div className="text-gray-600">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">20</div>
                  <div className="text-gray-600">Total Quizzes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100</div>
                  <div className="text-gray-600">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">∞</div>
                  <div className="text-gray-600">Retakes</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}