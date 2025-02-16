// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserAuthContext';

const Home: React.FC = () => { 
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      logOut();
      navigate('/');
    } catch (error) {
      console.log(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
    style={{
      backgroundImage: "url('/backgroundimg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
   
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-12">
          {/* Welcome Card */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-8 py-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
                {user && (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-medium text-indigo-600">
                        {user.username?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                      </span>
                    </div>
                    <div className="text-left">
                      {user.username && (
                        <p className="text-sm font-medium text-gray-900">{user.username}</p>
                      )}
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                    />
                  </svg>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;