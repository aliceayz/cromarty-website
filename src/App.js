// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Footer from './components/footer';
import Courts from './pages/Courts';
import Success from './pages/Success';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courts" element={<Courts />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/courts/src/pages/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


