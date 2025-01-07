import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="absolute h-2 w-2 bg-blue-400/20 rounded-full top-1/4 left-1/4" />
        <div className="absolute h-2 w-2 bg-blue-400/20 rounded-full top-3/4 right-1/4" />
        <div className="absolute h-2 w-2 bg-blue-400/20 rounded-full bottom-1/4 left-1/3" />

        {/* Circles */}
        <div className="absolute h-32 w-32 bg-blue-900/20 rounded-full -top-10 -left-10" />
        <div className="absolute h-48 w-48 bg-blue-900/20 rounded-full bottom-20 right-20" />
        <div className="absolute h-40 w-40 bg-blue-900/20 rounded-full top-40 right-0" />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            E<span className="text-blue-500">V</span>ENT
            <span className="block">FUNDLY</span>
          </h1>
        </div>


        {/* Form */}
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full px-4 py-3 bg-gray-700/50 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="INPUT PASSWORD"
              className="w-full px-4 py-3 bg-gray-700/50 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="CONFIRM PASSWORD"
              className="w-full px-4 py-3 bg-gray-700/50 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-gray-900 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            SIGN UP
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <Link
            href="/forgot-password"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            FORGOT YOUR PASSWORD?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

