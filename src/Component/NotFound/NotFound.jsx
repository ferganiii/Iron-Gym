import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-orange-300">
      <div className="text-center bg-white p-10 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-9xl font-extrabold text-orange-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="bg-orange-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
