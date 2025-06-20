import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12 mobile-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <h1 className="mobile-heading font-bold text-gray-800 mb-6 gradient-text">
            About AOM Aspirant
          </h1>
          <p className="mobile-text text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AOM Aspirant is a modern platform designed to help you test and improve your general knowledge
            through engaging quizzes. Join us to challenge yourself, learn new facts, and track your progress!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Features Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-slide-in-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Features</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Interactive Quizzes</h3>
                  <p className="text-gray-600 mobile-text">Engage with carefully crafted questions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Progress Tracking</h3>
                  <p className="text-gray-600 mobile-text">Monitor your performance over time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Diverse Topics</h3>
                  <p className="text-gray-600 mobile-text">Explore various knowledge areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-slide-in-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
            <div className="space-y-4">
              <p className="text-gray-600 mobile-text leading-relaxed">
                We believe that learning should be engaging, accessible, and rewarding. Our mission is to provide
                a platform where knowledge seekers can challenge themselves and grow.
              </p>
              <p className="text-gray-600 mobile-text leading-relaxed">
                Whether you&apos;re preparing for exams, expanding your general knowledge, or simply looking for
                an intellectual challenge, AOM Aspirant is here to support your learning journey.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg mobile-padding border border-white/20 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get Started</h2>
          <p className="text-gray-600 mobile-text text-center max-w-2xl mx-auto mb-6">
            Ready to test your knowledge? Sign up today and start your learning journey with AOM Aspirant.
          </p>
          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-button focus-ring mobile-text"
            >
              Start Learning Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}