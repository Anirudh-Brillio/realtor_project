import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaBed, FaBath, FaRulerCombined, FaCalendarAlt, FaSwimmingPool, FaParking, FaTree, FaDumbbell, FaCar, FaBus } from 'react-icons/fa';

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
    return <div className="flex justify-center items-center min-h-screen">
      <div className="text-2xl font-semibold">Loading...</div>
    </div>;
  }

  const amenityIcons = {
    Pool: <FaSwimmingPool />,
    Garage: <FaCar />,
    Gym: <FaDumbbell />,
    Parking: <FaParking />,
    Garden: <FaTree />
  };

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen flex   justify-center">
          <div key={id} className="relative overflow-hidden mt-5">
            <img src={require(`../asset/${id}.jpg`)} alt={`Property ${id}`} className="w-2/3 object-cover h-96 rounded-md"/>
          </div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-900">{propertyDetail.title}</h1>
        <p className="text-gray-700 text-md mb-6">{propertyDetail.description}</p>
        <ul className="text-gray-700 space-y-4 text-lg">
          <li className="flex items-center"><FaRulerCombined className="mr-2 text-2xl text-blue-900" /> <strong>Size:</strong> {propertyDetail.size}</li>
          <li className="flex items-center"><FaBed className="mr-2 text-2xl text-blue-900" /> <strong>Bedrooms:</strong> {propertyDetail.bedrooms}</li>
          <li className="flex items-center"><FaBath className="mr-2 text-2xl text-blue-900" /> <strong>Bathrooms:</strong> {propertyDetail.bathrooms}</li>
          <li className="flex items-center"><FaCalendarAlt className="mr-2 text-2xl text-blue-900" /> <strong>Year Built:</strong> {propertyDetail.year_built}</li>
          <li className="flex items-center">
            <h1 className='font-bold'>Amenities:</h1>
            <div className="flex space-x-4 ml-4">
              {propertyDetail.amenities.map((amenity, index) => (
                <span key={index} title={amenity} className='flex items-center gap-2 text-blue-900 border-2 border-blue-900 hover:bg-blue-900 hover:text-white p-2 rounded-xl '>{amenityIcons[amenity]} {amenity}</span>
              ))}
            </div>
          </li>
          <li className="flex items-center"><FaBus className="mr-2 text-2xl text-blue-900" /> <strong>Transportation: </strong> {propertyDetail.transportation}</li>
          <li className="flex items-center">
            <strong>Nearby Schools:</strong>
            <div className="ml-4 gap-5 flex">
              {propertyDetail.nearby_schools.map((school, index) => (
                <div key={index}>{school}</div>
              ))}
            </div>
          </li>
        </ul>
      </div>
      
      
    </div>
  );
}

export default PropertyDetailPage;
