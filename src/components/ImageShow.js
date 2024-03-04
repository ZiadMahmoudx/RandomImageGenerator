import React, { useState } from 'react';
import { useContext } from 'react';
import ImagesContext from '../context/images';
import ImageEdit from './ImageEdit';

const ImageShow = ({ image }) => {
  const { deleteImageById } = useContext(ImagesContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteImageById(image.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = <h3 className="text-lg font-semibold">{image.title}</h3>;

  if (showEdit) {
    content = <ImageEdit onSubmit={handleSubmit} image={image} />;
  }

  return (
    <div className="image-show bg-white rounded-lg shadow-lg p-1">
      <img
        src={`https://picsum.photos/seed/${image.id}/300/300`}
        alt="photos"
        className="rounded-lg mb-2"
      />
      <div className=" items-center">
        {content}
        <div className="actions">
          <button
            className="text-sm text-purple-800 bg-purple-200 px-3 py-1 rounded-md mr-2 hover:bg-purple-300 focus:outline-none focus:bg-purple-300"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className="text-sm text-red-800 bg-red-200 px-3 py-1 rounded-md hover:bg-red-300 focus:outline-none focus:bg-red-300"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageShow;
