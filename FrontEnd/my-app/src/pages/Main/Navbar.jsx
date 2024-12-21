import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signOut, getProfileData } from "./api.js"; // استيراد خدمات API
import "./navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // جلب بيانات المستخدم إذا كان مسجل دخوله
    const fetchProfile = async () => {
      const token = localStorage.getItem("token"); // التوكن المخزن
      if (token) {
        try {
          const data = await getProfileData(token);
          setProfile(data);
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Error fetching profile:", error);
          setIsLoggedIn(false);
        }
      }
    };

    fetchProfile();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem("token"); // إزالة التوكن
      setIsLoggedIn(false);
      setProfile(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <h1 className="name">TALBATK</h1>
      </div>
      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <div>
              <Link to="./ProfileData">Welcome, {profile?.name || "User"}</Link>
            </div>
            <div>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          </>
        ) : (
          <>
          <div>
          <Link to="./ProfileData">Profile Data</Link>
        </div>
            <div>
              <Link to="./signin">Sign In</Link>
            </div>
            <div>
              <Link to="./AddCart"> Add Cart</Link>
            </div>
            <div>
              <Link to="./signup">Sign Up</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
