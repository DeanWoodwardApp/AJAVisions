import React from "react";
import profileImg from "../../assets/Aidan Home photo.png";
import arrowImg from "../../assets/Arrow 15.svg";
import "./index.css";

function Home() {
  return (
    <div className="container">
        <img src={profileImg} alt="Aidan Anderson" className="profile-image"/>
        <h1 className="title">Aidan Anderson</h1>
        <h2 className="subtitle">Freelance Videographer</h2>
        <img src={arrowImg} alt="arrow" className="arrow-image"/>
        <p className="mission-statement">Mission statement directed at potential clients that will resonate with them. Add to Mission statement with your own personality and flair that you bring.</p>
        <button className="about-button">About me</button>
        
        <p className="testimonial">Don’t just take my word, here’s what others have to say.</p>
    </div>
  );
}

export default Home;
