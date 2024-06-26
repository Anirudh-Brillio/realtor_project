import React from 'react';
import { Link } from 'react-router-dom';

function HomeSiteCard({data}) {
  return (
    <Link className="p-2" to={data.category}>
      <div className="relative inline-block w-64 font-bold shadow-xl">
        <img
          src={require(`../../asset/${data.id}.jpg`)}
          alt="New Listing"
          className="w-full h-44 rounded-lg  brightness-50"
        />
        <div className="absolute top-0 left-0 p-2 text-white ">
          <h1>{data.category}</h1>
        </div>
        <div className="absolute top-2 right-2 px-2 py-1 bg-white rounded-lg text-xs">
          <h1>{data.quantity}</h1>
        </div>
      </div>
    </Link>
  );
}

export default HomeSiteCard;
