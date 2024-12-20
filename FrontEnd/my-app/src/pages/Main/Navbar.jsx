import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";

const Navbar = () => {
  // فرض حالة تسجيل الدخول (يمكنك التبديل بينها لتجربة الحالتين)
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // حالة تسجيل الدخول

  return (
    <nav className="navbar">
        <div>
            <h1 className="name">TALBATK</h1>
        </div>
      <div className="navbar-links">
        {/* إذا كان المستخدم مسجلاً دخوله يظهر الروابط التالية */}
        {isLoggedIn ? (
          <>
            <div>
              <Link to="./ProfileData">Profile Data</Link>
            </div>
            <div>
              <Link to="./addcart">Add Cart</Link> {/* رابط إضافة السلة */}
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="./signin">Sign In</Link>
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
