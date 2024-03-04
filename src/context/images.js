import { createContext, useState } from 'react';

const ImagesContext = createContext();

function Provider({ children }) {
  const [images, setImages] = useState([]);

  const createImage = (title) => {
    const updatedImages = [
      ...images,
      { id: Math.round(Math.random() * 9999), title }
    ];
    setImages(updatedImages);
  };
  const deleteImageById = (id) => {
    const updatedImages = images.filter((image) => {
      return image.id !== id;
    });
    setImages(updatedImages);
  };
  const editImageById = (id, newTitle) => {
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        return { ...image, title: newTitle };
      }
      return image;
    });
    setImages(updatedImages);
  };

  const valueToShare = {
    images,
    createImage,
    deleteImageById,
    editImageById
  };

  return (
    <ImagesContext.Provider value={valueToShare}>
      {children}
    </ImagesContext.Provider>
  );
}

export { Provider };
export default ImagesContext;
