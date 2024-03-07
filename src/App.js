import React from 'react';
import CreateImage from './components/CreateImage';
import ImageList from './components/ImageList';
import Navbar from './components/NavBar';
import { useContext, useEffect } from 'react';
import ImagesContext from './context/images';

const App = () => {
  const { fetchImages } = useContext(ImagesContext);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);
  return (
    <div>
      <Navbar />
      <CreateImage />
      <ImageList />
    </div>
  );
};

export default App;
