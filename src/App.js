// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Styles
import './styles/global.css';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Subject from './pages/Subject';
import AskQuestion from './pages/AskQuestion';
import Profile from './pages/Profile';
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/Login" element={<Login />} />
       

        {/* Protected/User Routes */}
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
