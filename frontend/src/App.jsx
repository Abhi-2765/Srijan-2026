import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
//import Gallery from "./pages/Gallery.jsx";
import Events from "./pages/EventPage/EventPage";
import Navbar from './components/Navbar.jsx';
//import Sponsors from "./pages/Sponsors.jsx";
//import Merchandise from "./pages/Merchandise.jsx";
//import Team from "./pages/Team/Team";


export default function App() {
  return (
    <>
    <Navbar />
  {/* visible everywhere */}
      <Routes>
        <Route path="/" element={<Events />} />
      {/**    <Route path="/gallery" element={<Gallery />} />
       *     <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/merchandise" element={<Merchandise />} />
         <Route path="/team" element={<Team />} />
       * 
       */}  
        <Route path="/events" element={<Events />} />
    
       
      </Routes>
    </>
  );
}
