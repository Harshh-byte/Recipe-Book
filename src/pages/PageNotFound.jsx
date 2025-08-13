import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400">404</h1>
      <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-md text-center max-w-md">
        We couldn't find what you were looking for. Please try again.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;