import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PanCard from "./components/Pan";
import AadhaarCard from "./components/Aadhaar";
import Resume from "./components/Resume";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";

import k from './assets/k2.jpg'

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the personal information</h1>
      <img src={k} alt="Home Page" className="home-image" />
      <Link to="/pan-card" className="button">PAN Card</Link>
      <Link to="/aadhaar-card" className="button">Aadhaar Card</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on all pages */}

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* PAN & Aadhaar Card Pages */}
        <Route path="/pan-card" element={<PanCard />} />
        <Route path="/aadhaar-card" element={<AadhaarCard />} />

        {/* Other Pages */}
        <Route path="/h" element={<Hero />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/bye" element={<h1>Goodbye Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
