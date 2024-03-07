import React from 'react';
import { useContext } from 'react';
import ImagesContext from '../context/images';
import ImageShow from './ImageShow';

const ImageList = () => {
  const { images } = useContext(ImagesContext);

  const renderImages = images.map((image) => {
    return <ImageShow key={image._id} image={image} />;
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center	items-baseline	  gap-4">
      {renderImages}
    </div>
  );
};

export default ImageList;
