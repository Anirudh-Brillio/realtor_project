import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full flex items-center">
        <FaHome className="mr-2" /> Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
