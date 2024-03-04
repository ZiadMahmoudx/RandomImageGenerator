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
  let content = <h3>{image.title}</h3>;

  if (showEdit) {
    content = <ImageEdit onSubmit={handleEditClick} image={image} />;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${image.id}/200/200`}
        alt="photos"
      />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ImageShow;
