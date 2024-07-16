import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import saathiLogo from "../../assets/images/saathiLogo.png";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { authUser } = useAuthContext();
  const { logout } = useLogout();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`box ${scrolled ? "scrolled" : ""}`}>
      <img
        src={saathiLogo}
        alt="logo"
        className={`logo ${scrolled ? "hidden" : ""}`}
      />
      <header className="header">
        <ul className={`Navbar ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">
            <li className="Home">Home</li>
          </Link>

          <li className="Faq">
            <Link to="/faq">FAQs</Link>{" "}
          </li>
          <li>
            <Link to="/write-story">Write Your Story</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
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
