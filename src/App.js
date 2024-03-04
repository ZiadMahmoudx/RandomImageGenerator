import React from 'react';
import CreateImage from './components/CreateImage';
import ImageList from './components/ImageList';

const App = () => {
  return (
    <div className="app">
      <ImageList />
      <CreateImage />
    </div>
  );
};

export default App;
