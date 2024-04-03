import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from"./Components/NavBar/NavBar"
import Footer from"./Components/Footer/Footer"
import reportWebVitals from './reportWebVitals';
import HomePage from "./Components/Screens/HomePage";
import AboutMe from "./Components/Screens/AboutMe";
import AddDonation from "./Components/Screens/AddDonation";
import ConnectUs from "./Components/Screens/ConnectUs";
import DonationsSearch from "./Components/Screens/DonationsSearch";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <NavBar />
  <Footer />
    {/* Add array of routes, each route will tell which component to render
  in a certain path */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About_Me" element={<AboutMe />} />
      <Route path="/Add_Donation" element={<AddDonation />} />
      <Route path="/Connect_Us" element={<ConnectUs />} />
      <Route path="/Donations_Search" element={<DonationsSearch />} />
      <Route
        path="*"
        element={<h3 className="Eror_Page">404 - page not found!</h3>}
        />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
