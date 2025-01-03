import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    if (email === 'admin@example.com' && password === 'admin') {
      navigate('/Dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute h-2 w-2 bg-blue-400/20 rounded-full top-1/4 left-1/4" />
        <div className="absolute h-2 w-2 bg-blue-400/20 rounded-full top-3/4 right-1/4" />
        <div className="absolute h-2 w-2 bg-blue-400/20 rounded-full bottom-1/4 left-1/3" />
        <div className="absolute h-32 w-32 bg-blue-900/20 rounded-full top-20 left-20" />
        <div className="absolute h-48 w-48 bg-blue-900/20 rounded-full bottom-20 right-20" />
        <div className="absolute h-40 w-40 bg-blue-900/20 rounded-full top-40 right-0" />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            E<span className="text-blue-500">V</span>ENT FUNDLY
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSignIn}>
          <div>
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-white text-gray-900 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            LOG IN
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">FORGOT YOUR PASSWORD?</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
