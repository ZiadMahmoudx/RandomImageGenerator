import React, { useState } from 'react';
import { useContext } from 'react';
import ImagesContext from '../context/images';

const ImageEdit = ({ image, onSubmit }) => {
  const { editImageById } = useContext(ImagesContext);
  const [newTitle, setNewTitle] = useState(image.title);
  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editImageById(image._id, newTitle);
  };

  return (
    <form onSubmit={handleSubmit} className="image-edit">
      <input
        value={newTitle}
        onChange={handleChange}
        id="edit"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-800"
        placeholder="Enter new title"
      />
      <button
        type="submit"
        className="w-full bg-purple-800 text-white rounded-md  hover:bg-purple-700 focus:outline-none focus:bg-purple-700 mb-2"
      >
        Save!
      </button>
    </form>
  );
};

export default ImageEdit;
