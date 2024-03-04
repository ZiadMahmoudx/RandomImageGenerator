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
    <div className="book-create">
      <h3>Add a Image</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="in">Add Image</label>
        <input
          className="input"
          id="in"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default CreateImage;
