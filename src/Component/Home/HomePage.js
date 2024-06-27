import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import HomeSiteCard from './HomeSiteCard';
import axios from 'axios';
import SearchProperty from '../SearchProperty';

function HomePage() {
  const [listings, setListings] = useState([]);
  const [properties, setProperties] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingsRes = await axios.get("http://localhost:3001/listings");
        const propertiesRes = await axios.get('http://localhost:3001/properties');
        setListings(listingsRes.data);
        setProperties(propertiesRes.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchItem.trim().length === 0) {
        setFilteredListings([]);
      } else {
        const filtered = properties.filter(listing =>
          listing.title.toLowerCase().includes(searchItem.toLowerCase()) ||
          listing.category.toLowerCase().includes(searchItem.toLowerCase()) ||
          listing.location.toLowerCase().includes(searchItem.toLowerCase())
        );
        setFilteredListings(filtered);
      }
    }, 300); // Debounce by 300ms

    return () => clearTimeout(debounce);
  }, [searchItem, properties]);

  return (
    <>
      <HeroSection setSearchItem={setSearchItem} />
      <h1 className='font-bold mx-20 my-5 text-xl'>
        {searchItem.length === 0 ? 'Browse homes in Panama City Beach, FL' : `Showing result(s): ${filteredListings.length}`}
      </h1>
      <div className='grid grid-cols-2 mx-10 gap-5'>
      {searchItem.length > 0 && filteredListings.map(property => (
          <SearchProperty key={property.id} data={property} />
        ))}
        </div>
      <div className='grid grid-cols-4 text-center mx-10'>
        {searchItem.length === 0 && listings.map(card => (
          <HomeSiteCard key={card.id} data={card} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
