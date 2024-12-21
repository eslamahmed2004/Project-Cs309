import React, { useState } from "react";
import Navbar from "./Navbar"; 
import Search from "./Search";
import Body from "./Body";
import Application from "./Application";
import Locations from "./Locations";
import Footer from "./Footer";

export const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userData, setUserData] = useState(null);  

  
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserData({
      name: "John Doe",
      email: "johndoe@example.com",
      profilePicture: "https://via.placeholder.com/150"
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);  
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Search />
      <Body />
      <Application />
      <Locations />
      
      {isLoggedIn && userData && (
        <div className="profile-container">
          <h2>Welcome, {userData.name}!</h2>
          <p>Email: {userData.email}</p>
          <img src={userData.profilePicture} alt="Profile" className="profile-pic" />
        </div>
      )}

    </div>
  );
};

export default Main;
