import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Gallery from '../Srijan-2026/frontend/src/pages/Gallery.jsx';


function App() {
 
  const [showGallery, setShowGallery] = useState(false);

  return (
    <BrowserRouter>
    <div className="App">
       <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        </div>
        </BrowserRouter>
     
    
  );
}

export default App;