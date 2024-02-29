import './App.css';
import React, { useEffect } from "react";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Gallery from "./pages/gallery/index";
import Contact from "./pages/contact/index";
import Navbar from "./components/navbar/index";
import Preloader from './commonComponents/preloader';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isFirstTimeViewing, setIsFirstTimeViewing] = useState(false);

  useEffect(()=>{
    const initialRoute = window.location.pathname;
    if(initialRoute === "/"){
      setIsFirstTimeViewing(true);
    }
    setTimeout( () => {
      setIsLoading(false);
      setIsFirstTimeViewing(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0,0);
    }, 2000)
  })
  
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        {isFirstTimeViewing && isLoading && <Preloader />}
      </AnimatePresence>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;