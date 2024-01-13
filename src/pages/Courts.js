// src/components/Home.js
import React from 'react';
import Form from '/Users/alicezhao/Code/courts/src/components/form'; // Import the SimpleForm component
import '/Users/alicezhao/Code/courts/src/App.css';

const Courts = () => {
  return (
    <div>
      <div className='courts'>
        <h1>Forgot the code?</h1> 
        <h2>Enter your membership information!</h2>
        <Form /> {/* Render the SimpleForm component */}
     </div>
    </div>
  );
};

export default Courts;
