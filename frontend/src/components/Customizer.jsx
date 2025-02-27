import React, { useState } from "react";

const Customizer = ({ productImage, productDescription }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("#000000");
  const [description, setDescription] = useState("");

  // Handle Text Change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Handle Color Change
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Handle Description Change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      {/* Customizer Container */}
      <div className="flex w-3/4 max-w-7xl rounded-lg shadow-lg overflow-hidden bg-white">
        
        {/* Left Side: Product Image */}
        <div className="flex-1 bg-gradient-to-l from-fuchsia-100 to-fuchsia-300 flex flex-col items-center justify-center p-4">
        <img
          src={productImage}
          alt="Product"
          className="w-[320px] h-[320px] object-contain rounded-lg"
        />
        {/* Dynamic Product Description */}
        <p className="m-6  text-gray-800 text-lg text-center">{productDescription}</p>
      </div>


        {/* Right Side: Customization Options */}
        <div className="flex-1 p-6 bg-gradient-to-r from-fuchsia-100 to-fuchsia-300 border-l-2 border-gray-600">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Customize Your Gift</h2>

          {/* Step 1: Add Text (Optional) */}
          <div className="mb-6">
            <h3 className="text-xl text-black mb-2">Add Text (Optional)</h3>
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Enter your text"
              className="w-full p-3 border-2 border-white outline-0 rounded-lg text-lg"
            />
          </div>

          {/* Step 2: Upload Image (Optional) */}
          <div className="mb-6">
            <h3 className="text-xl text-black  mb-2">Upload Image (Optional)</h3>
            <input
              type="file"
              onChange={handleImageUpload}
             
              className="w-full p-3 border-2 border-white outline-0 rounded-lg text-lg"
            />
          </div>

          {/* Step 3: Choose Color (Optional) */}
          <div className="mb-6">
            <h3 className="text-xl  text-black mb-2">Choose Color (Optional)</h3>
            <input
              type="color"
              value={color}
              onChange={handleColorChange}
              className="w-8 h-8 border-none rounded-lg"
            />
          </div>

          {/* Step 4: Add Description (Optional) */}
          <div className="mb-4">
            <h3 className="text-xl  text-black  mb-2">Add Description (Optional)</h3>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Write a description for your gift"
              className="w-full h-22 border-2 border-white outline-0 rounded-lg text-lg resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              className="px-4 py-3 bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white text-lg font-medium rounded-lg shadow-md "
              onClick={() => alert("Your customization is ready!")}
            >
              Submit Customization
            </button>
          </div>
        </div>
      </div>
      </>
  );
};

export default Customizer;
