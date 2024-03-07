import React, { useState } from 'react';
import { useContext } from 'react';
import ImagesContext from '../context/images';

const CreateImage = () => {
  const { createImage } = useContext(ImagesContext);
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    createImage(title);
    setTitle('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="max-w-sm mx-auto p-1 bg-gray-100 rounded-lg shadow-lg mb-4">
      <h3 className=" font-semibold text-purple-800 mb-1">
        Create Random Image!
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            id="imageInput"
            type="text"
            value={title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-800"
            placeholder="Enter a title for your random image. "
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Create!
        </button>
      </form>
    </div>
  );
};

export default CreateImage;
