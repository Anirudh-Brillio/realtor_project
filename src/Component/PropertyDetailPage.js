import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaBed, FaBath, FaRulerCombined, FaCalendarAlt, FaSwimmingPool, FaParking, FaTree, FaDumbbell, FaCar } from 'react-icons/fa';

function PropertyDetailPage() {
  const { id } = useParams();
  const [propertyDetail, setPropertyDetail] = useState(null);

  useEffect(() => {
    const fetchPropertyDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/details?id=${id}`);
        setPropertyDetail(res.data[0]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPropertyDetail();
  }, [id]);

  if (!propertyDetail) {
    return <div>Loading...</div>;
  }

  const amenityIcons = {
    Pool: <FaSwimmingPool />,
    Garage: <FaCar />,
    Gym: <FaDumbbell />,
    Parking: <FaParking />,
    Garden: <FaTree />
  };

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{propertyDetail.title}</h1>
        <p className="text-gray-700 text-lg mb-2">{propertyDetail.description}</p>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-center"><FaRulerCombined className="mr-2" /> <strong>Size:</strong> {propertyDetail.size}</li>
          <li className="flex items-center"><FaBed className="mr-2" /> <strong>Bedrooms:</strong> {propertyDetail.bedrooms}</li>
          <li className="flex items-center"><FaBath className="mr-2" /> <strong>Bathrooms:</strong> {propertyDetail.bathrooms}</li>
          <li className="flex items-center"><FaCalendarAlt className="mr-2" /> <strong>Year Built:</strong> {propertyDetail.year_built}</li>
          <li className="flex items-center">
            <strong>Amenities:</strong>
            <div className="flex space-x-2 ml-2">
              {propertyDetail.amenities.map((amenity, index) => (
                <span key={index} title={amenity} className='flex items-center gap-2'>{amenityIcons[amenity]} {amenity}</span>
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {propertyDetail.photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={require(`../asset/${index}.jpg`)} alt={`Property ${index}`} className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyDetailPage;
