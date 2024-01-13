import React from 'react';
import { isLoggedIn } from '/Users/alicezhao/Code/courts/src/components/form.js';
import '/Users/alicezhao/Code/courts/src/App.css';



const Success = () => {
    return (
        <div>
          {isLoggedIn && (
            <div className='success'>
              <h1>The code is 1234!</h1>
              <h2>Enjoy your game! please do not share this code</h2>
            </div>
          )}
          {!isLoggedIn && (
            <div className='success'>
                <h1>Please click <a href='/courts'>here</a> to get code!</h1>
          </div>
          )}
        </div>
        
      );
};

export default Success;

