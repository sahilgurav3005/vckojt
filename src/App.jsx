import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sahil Samir Gurav"
          studentPhotoUrl="/Images/sahil.jpeg" // Path to their photo
          uniqueMessage="Learned So much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        
      </Routes>
      <ChatbotComponent></ChatbotComponent>
      <Footer/>

    </>
  );
};

export default App;
