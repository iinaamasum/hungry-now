import React from 'react';
import background from '../../../images/bannerbackground12.png';

const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background}) ` }}
        className="object-fill h-[70vh]  flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl mb-5">
            Best Food Waiting for Your Belly...
          </h2>
          <div className="flex w-10/12 mx-auto">
            <input
              className="py-4 px-10 rounded-l-full outline-none w-4/5 text-center text-xl text-gray-500 tracking-wider"
              type="text"
              name="search"
              id=""
              placeholder="Search Here..."
            />
            <button className="w-1/5 rounded-r-full text-2xl bg-red-500 hover:bg-red-700 text-white tracking-wide">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
