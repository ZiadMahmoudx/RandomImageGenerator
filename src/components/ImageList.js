import React from 'react';
import { useContext } from 'react';
import ImagesContext from '../context/images';
import ImageShow from './ImageShow';

const ImageList = () => {
  const { images } = useContext(ImagesContext);

  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="book-list">{renderImages}</div>;
};

export default ImageList;
