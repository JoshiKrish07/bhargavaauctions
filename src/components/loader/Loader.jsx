import React from 'react';
import { Oval } from 'react-loader-spinner'; // Import the Oval loader
import './Loader.css'; // Ensure you have the CSS for the loader

const Loader = ({ isLoading = true }) => {
  return (
    isLoading && (
      <div className="full-screen-loader">
        <Oval
          height={80} // Adjust height for better visibility
          width={80}   // Adjust width for better visibility
          color="#4CAF50" // Customize the loader color
          secondaryColor="#f3f3f3" // Background color
          ariaLabel="loading"
        />
      </div>
    )
  );
};

export default Loader;
