import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PropertyListing({ PropertyName }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/properties?category=${PropertyName}`)
      .then(res => setListings(res.data))
      .catch(error => console.error('Error fetching listings:', error));
  }, [PropertyName]);

  return (
    <div className="bg-white py-10 mx-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Browse home in Panama City Beach, FL : {PropertyName}</h2>
        <div className=" grid grid-cols-2 items-center gap-10">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden  transition-transform transform flex justify-start w-full items-center">
              <img src={require(`../asset/${listing.id}.jpg`)} alt={listing.title} className="w-56 h-56 object-cover rounded-lg p-5" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{listing.title}</h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaTags className="mr-2" />
                  <span className="font-bold">Category:</span> {listing.category}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span className="font-bold">Location:</span> {listing.location}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaDollarSign className="mr-2" />
                  <span className="font-bold">Price:</span> ${listing.price.toLocaleString()}
                </div>
                <div className="flex items-center text-gray-600 mb-5">
                  <span className="font-bold">Quantity:</span> {listing.quantity}
                </div>
                <Link to={`/detailes/${listing.id}`} className='bg-blue-900 px-2 py-1 rounded-md text-white mt-2'>See More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyListing;
