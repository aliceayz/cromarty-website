// src/components/HomePage.js
import React from 'react';
import '/Users/alicezhao/Code/courts/src/App.css'

const HomePage = () => {


  return (
    <main>


      <div className="first background-container">
        <h1 className="title">Cromarty Tennis Club</h1>
        <p className="text">est. 1902</p>
      </div>

      <div className="second">
      <img src={require('/Users/alicezhao/Code/courts/src/files/Logo_of_Cromarty_Tennis_Club-removebg-preview.png')} alt='logo' className='logo' />
        <div className='subsecond'>
        <h3>For over 100 years, Cromarty Tennis Club located near downtown Sydney has built its reputation as the premier tennis club in Cape Breton. From high-caliber tennis, to all-around athletics and exceptional social scene, membership is about belonging to a uniquely warm community located right in the heart of Cape Breton.</h3>
        </div>
      </div>

      <div className="container">
        <div className="box one">
          <a href="/Courts">
            <div className="overlay">
              <h1>Court Access</h1>
              <div>
                Forgot the code? Get access here!
              </div>
            </div>
          </a>
        </div>

        <div className="box two">
          <a href="/about">
            <div className="overlay">
              <h1>History</h1>
              <div>
                Learn about one of the oldest tennis clubs in Canada!
              </div>
            </div>
          </a>
        </div>

        <div className="box three">
          <a href="/Members">
            <div className="overlay">
              <h1>Membership</h1>
              <div>
                Interested in becoming a member?
              </div>
            </div>
          </a>
        </div>

        <div className="box four">
          <a href="/Members">
            <div className="overlay">
              <h1>Junior Lessons</h1>
              <div>
                Interested in summer lessons for kids aged 4-18?
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
