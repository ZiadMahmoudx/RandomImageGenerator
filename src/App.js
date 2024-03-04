import React from 'react';
import CreateImage from './components/CreateImage';
import ImageList from './components/ImageList';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <div>
      <Navbar />
      <CreateImage />
      <ImageList />
    </div>
  );
};

export default App;
