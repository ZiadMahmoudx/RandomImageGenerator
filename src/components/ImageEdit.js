import React, { useState } from 'react';
import { useContext } from 'react';
import ImagesContext from '../context/images';

const ImageEdit = ({ image, onSubmit }) => {
  const { editImageById } = useContext(ImagesContext);
  const [newTitle, setNewTitle] = useState(image.title);

  const handleSubmit = (e) => {
    editImageById(image.id, newTitle);
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="edit">Title</label>
      <input
        value={newTitle}
        onChange={handleChange}
        id="edit"
        className="input"
      />
      <button className="button in-primary">Save!</button>
    </form>
  );
};

export default ImageEdit;
