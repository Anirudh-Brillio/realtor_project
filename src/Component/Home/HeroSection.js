import React, { useState } from 'react';
import bgCoverImg from '../../asset/bg_cover_img.jpg';
import { Link } from 'react-router-dom';

function HeroSection({ setSearchItem }) {
  const [searchQuery ,setSearchQuery] =  useState("");
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchItem(searchQuery);
  };

  return (
    <div className="relative">
      <div className="w-full h-96 overflow-hidden brightness-50">
        <img
          src={bgCoverImg}
          className="w-full h-full object-cover"
          alt="Cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center text-white">
        <h1 className="text-center text-white text-5xl font-bold m-5">
          The #1 site real estate <br /> professionals trust*
        </h1>
        <ul className="flex space-x-4 mb-8 h-8 text-lg font-mono">
          <Link className="hover:border-b-4 hover:border-white cursor-pointer" to={'New Listings'}>Buy</Link>
          <Link className="hover:border-b-4 hover:border-white cursor-pointer" to={'Price reduced'}>Rent</Link>
          <Link className="hover:border-b-4 hover:border-white cursor-pointer" to={'Land'}>Sell</Link>
          <Link className="hover:border-b-4 hover:border-white cursor-pointer" to={'New home communities'}>Pre-approval</Link>
          <Link className="hover:border-b-4 hover:border-white cursor-pointer" to={'Recently sold'}>Just Sold</Link>
        </ul>
        <form className="flex justify-center items-center w-full max-w-lg text-black bg-white rounded-full" onSubmit={handleSearch}>
          <input
            placeholder="Address, School, City, Zip or Neighborhood"
            className="w-full p-4 rounded-full outline-none"
            onChange={e=>setSearchQuery(e.target.value)}
          />
          <button className="ml-2 p-4  border-2 bg-black text-white rounded-full" type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
