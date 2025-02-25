import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Send gift to: ${location} at ${time}`);
    navigate("/collection");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen mt-10 pt-8 pb-6">
    
      <div className="flex  flex-col gap-5 sm:flex-row bg-white p-12 rounded-lg shadow-lg w-full h-full sm:h-auto max-w-screen-xl mb-6  space-x-6">
       
        <div className="sm:w-1/2  mb-8 sm:mb-0 flex flex-col gap-2 justify-center items-center pl-6 sm:items-start">
          <h1 className="font-sans text-5xl mr-5 font-bold text-gray-800 mb-4">Welcome to Your Personalized Gift Shop</h1>
          <p className="font-sans text-xl text-gray-600 mb-6">
            Discover personalized gifts that make every occasion special. Choose the perfect gift and have it delivered
            wherever you want.
          </p>
          <button onClick={() => navigate("/collection")} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:from-purple-400 hover:to-pink-400">
            Send a Gift
          </button>
        </div>

   
        <div className="sm:w-1/2  flex justify-end relative">
          <div className="relative">
            <img
              src="/gift-Photoroom.png" 
              alt="Gift"
              className="w-3/4  h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-15 rounded-lg shadow-lg w-full h-auto max-w-screen-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Need a gift now?</h2>
        <form className="flex flex-col sm:flex-row sm:space-x-4 justify-center items-center" onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-0">
            <label className="flex flex-col mb-2 ml-2" htmlFor="">Where is it going?</label>
            <input
              type="text"
              placeholder="Write a destination"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-3  border border-gray-300 rounded-lg w-full sm:w-72"
            />
          </div>
          <div className="mb-4 sm:mb-0">
          <label className="flex flex-col mb-2 ml-2" htmlFor="">When should it get there?</label>
            <input
              type="text"
              placeholder="delivery date"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full sm:w-72"
            />
          </div>
          <button onClick={() => navigate("/collection")}
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold mt-8 mb-2 ml-8 w-full sm:w-auto whitespace-nowrap
            transition duration-300 hover:from-purple-400 hover:to-pink-400"
          >
            FIND A GIFT NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
