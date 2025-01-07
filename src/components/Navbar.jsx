import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex flex-col text-xl font-bold leading-none">
            <span className="italic text-blue-500 text-center">EVENT</span>
            <span className="font-semibold text-white">FUNDLY</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-blue-500 hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/fitur" className="text-gray-400 hover:text-white transition-colors">
            Fitur Utama
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
            Tentang Kami
          </Link>
          <Link to="/help" className="text-gray-400 hover:text-white transition-colors">
            Bantuan
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/SignIn"
            className="text-gray-300 hover:opacity-80 transition-opacity"
          >
            Sign In
          </Link>
          <Link
            to="/SignUp"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
