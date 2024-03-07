import { createContext, useState, useCallback } from 'react';
import axios from 'axios';
const ImagesContext = createContext();

function Provider({ children }) {
  const [images, setImages] = useState([]);

  const fetchImages = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://imagesapi-08jp.onrender.com/images'
      );
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }, []);

  const createImage = async (title) => {
    try {
      const response = await axios.post(
        'https://imagesapi-08jp.onrender.com/images',
        {
          title
        }
      );
      setImages([...images, response.data]);
    } catch (error) {
      console.error('Error creating image:', error);
    }
  };

  const deleteImageById = async (_id) => {
    try {
      await axios.delete(`https://imagesapi-08jp.onrender.com/images/${_id}`);
      const updatedImages = images.filter((image) => image._id !== _id);
      setImages(updatedImages);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const editImageById = async (_id, newTitle) => {
    try {
      const response = await axios.put(
        `https://imagesapi-08jp.onrender.com/images/${_id}`,
        {
          title: newTitle
        }
      );
      const updatedImages = images.map((image) => {
        if (image._id === _id) {
          return { ...image, title: response.data.title };
        }
        return image;
      });
      setImages(updatedImages);
    } catch (error) {
      console.error('Error editing image:', error);
    }
  };

  const valueToShare = {
    images,
    fetchImages,
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
