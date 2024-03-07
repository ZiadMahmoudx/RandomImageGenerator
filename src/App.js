import React from 'react';
import CreateImage from './components/CreateImage';
import ImageList from './components/ImageList';
import Navbar from './components/NavBar';
import { useContext, useEffect, useState } from 'react';
import ImagesContext from './context/images';

import Loading from './components/Loading'; // Import the Loading component

const App = () => {
  const { fetchImages, images } = useContext(ImagesContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchImages();
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, [fetchImages]);

  return (
    <div>
      <Navbar />
      <CreateImage />
      {isLoading ? (
        <Loading /> // Display the loading component while waiting for data
      ) : (
        <ImageList images={images} />
      )}
    </div>
  );
};

export default App;
