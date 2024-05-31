import "./Navbar.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import saathiLogo from "./saathi-logo.png";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const isHomePage = () => {
    return location.pathname === "/";
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const { authUser } = useAuthContext();
  const { logout } = useLogout();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <div className="box">
      <header className="header">
        <img src={saathiLogo} alt="logo" className="logo" />
        <ul className={`Navbar ${isMenuOpen ? "open" : ""}`}>
          {!isHomePage() && (
            <Link to="/">
              <li className="Home">Home</li>
            </Link>
          )}
          <li className="Faq">
            <Link to="/faq">FAQs</Link>{" "}
          </li>
          <li>
            {authUser ? (
              <div id="logout-button" onClick={handleLogout}>
                Logout
              </div>
            ) : (
              <Link to={"/login"}>LogIn</Link>
            )}
          </li>
          {authUser ? (
            <li>
              <Link to="/reports">Reports</Link>
            </li>
          ) : (
            ""
          )}
          {authUser ? (
            ""
          ) : (
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          )}
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
