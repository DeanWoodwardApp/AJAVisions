//packages
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Using useNavigate for React Router v6
import { AnimatePresence } from "framer-motion";
//styling
import styles from "./style.module.scss";
//components
import Magnetic from '../../commonComponents/magnetic/index';

const Navbar = () => {
    const [showPreloader, setShowPreloader] = useState(false);
    const [preloaderWord, setPreloaderWord] = useState("");
    const [nextRoute, setNextRoute] = useState("");
    const navigate = useNavigate();

    const handleLinkClick = (event, word, path) => {
        event.preventDefault();
        setPreloaderWord(word);
        setShowPreloader(true);
        setNextRoute(path);

    // Optional: hide the preloader after some time (e.g., 2 seconds)
        setTimeout(() => {
            setShowPreloader(false);
            window.scrollTo(0, 0);
        }, 1250);
    };

    useEffect(() => {
        if (!showPreloader && nextRoute) {
            setTimeout(() => {
                navigate(nextRoute);
            }, 700);  // Assuming it takes 700ms for the preloader to cover the screen
        }
    }, [showPreloader, nextRoute, navigate]);

  return (
    <div className={styles.Navbar}>
        <Magnetic>
            <Link to="/" onClick={(event) => handleLinkClick(event, 'Home', "/")} rel="prelaod">Home</Link>
        </Magnetic>
        <Magnetic>
            <Link to="/about" onClick={(event) => handleLinkClick(event, 'About', "/about")} rel="prelaod">About</Link>
        </Magnetic>
        <Magnetic>
            <Link to="/gallery" onClick={(event) => handleLinkClick(event, 'Gallery', "/gallery")} rel="prelaod">Gallery</Link>
        </Magnetic>
        <Magnetic>
            <Link to="/contact" onClick={(event) => handleLinkClick(event, 'Contact', "/contact")} rel="prelaod">Contact</Link>
        </Magnetic>
    </div>
  );
};

export default Navbar;
