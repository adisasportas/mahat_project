import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="time">
          <span className="current-time">{currentTime}</span>
        </div>
        <ul className="nav-menu">
          <li className="Home_Page_nav-item">
            <a href="/" className="nav-link">Home Page</a>
          </li>
          <li className="About_Me_nav-item">
            <a href="/About_Me" className="nav-link">About Me</a>
          </li>
          <Link className="icon_nav-item" to="/Home_Page">
            <img src="icon.png" alt="icon" style={{ width: '100px', height: 'auto' }} />
          </Link>
          <li className="Add_Donation_nav-item">
            <a href="/Add_Donation" className="nav-link">Add Donation</a>
          </li>
          <li className="Donations_Search_nav-item">
            <a href="/Donations_Search" className="nav-link">Donations Search </a>
            </li>
            <li className="ConnectUs-nav-item">
            <a href="/Connect_Us" className="nav-link">Connect Us </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
