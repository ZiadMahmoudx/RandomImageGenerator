import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 opacity-75 z-50">
      <br />
      <div className="loader animate-spin ease-linear rounded-full border-8 border-t-8 border-saffron h-32 w-32">
        <h4 className="text-flamenco">Loading...</h4>
      </div>
      <p>"Gathering Images... This may take up to 50 seconds"</p>
    </div>
  );
};

export default Loading;
