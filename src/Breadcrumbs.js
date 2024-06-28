// src/components/Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb" className="bg-gray-100 p-3 rounded">
      <ol className="flex space-x-2 text-gray-600">
        <li className="breadcrumb-item">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const decodedValue = decodeURIComponent(value); // Decode URI component
          return (
            <li key={to} className="breadcrumb-item">
              <span className="mx-2">/</span>
              <Link to={to} className="text-blue-600 hover:underline">{decodedValue}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
