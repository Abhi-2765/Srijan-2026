import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage/EventPage";
import GalleryPage from "./pages/Gallery";
import AdminPage from "./pages/AdminPage";
import DemoComponent from "./components/DemoComponent";
import Sponsers from "./pages/sponserPage/sponsers.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/team" element={<DemoComponent />} />
        <Route path="/merchandies" element={<DemoComponent />} />
        
        <Route path="/register" element={<DemoComponent />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/sponsers" element={<Sponsers />} />
      </Routes>
    </div>
  );
}

export default App;
