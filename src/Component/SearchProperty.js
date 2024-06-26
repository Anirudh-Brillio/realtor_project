import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SearchProperty({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 transition-transform transform flex justify-start w-full">
      <img src={require(`../asset/${data.id}.jpg`)} alt={data.title} className=" w-56 h-56 object-cover rounded-md" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{data.title}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <FaTags className="mr-2" />
          <span className="font-bold">Category:</span> {data.category}
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span className="font-bold">Location:</span> {data.location}
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FaDollarSign className="mr-2" />
          <span className="font-bold">Price: </span>  ${data.price.toLocaleString()}
        </div>
        <div className="flex items-center text-gray-600 mb-5">
          <span className="font-bold">Quantity:</span> {data.quantity}
        </div>
        <Link to={`/detailed/${data.id}`} className='bg-red-600 px-2 py-1 rounded-md text-white mt-2'>See More</Link>
      </div>
    </div>
  );
}

export default SearchProperty;
