import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PropertyListing({PropertyName}) {
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
          <div className="space-y-6">
            {listings.map((listing) => (
              <div key={listing.id} className="flex items-center bg-gray-100 rounded-lg shadow-lg p-4">
                <img src={require(`../asset/${listing.id}.jpg`)} alt={listing.title} className="w-72 h-56 object-cover rounded-lg mr-4" />
                <div>
                  <div className="text-lg font-semibold mb-2">{listing.title}</div>
                  <div className="text-gray-600 mb-2">{listing.category}</div>
                  <div className="text-gray-600 mb-2">{listing.location}</div>
                  <div className="text-gray-600 mb-2">${listing.price.toLocaleString()}</div>
                  <div className="text-gray-600">Quantity: {listing.quantity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default PropertyListing