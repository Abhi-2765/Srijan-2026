import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import GalleryPage from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GalleryPage />
      {}
    </div>
  );
}

export default App;
