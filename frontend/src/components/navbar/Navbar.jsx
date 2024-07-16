import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import saathiLogo from "../../assets/images/saathiLogo.png";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    <div
      className={`w-full flex flex-col justify-center items-center fixed top-0 z-10 bg-orange-50 transition-all ease-in-out duration-300 ${
        scrolled ? "pt-1 pr-0 bg-neutral-100 shadow-black" : ""
      }`}
    >
      <img
        src={saathiLogo}
        alt="logo"
        className={`w-[50px] mt-5 mr-2 mb-0 ml-2 transition-all duration-300 ease-in-out ${
          scrolled ? "hidden" : ""
        }`}
      />
      <header className="flex justify-between items-center w-4/5 py-2">
        <ul className={`Navbar ${isMenuOpen ? "open" : ""}`}>
          <NavLink exact to="/" className="block">
            <li
              className={`font-bold text-gray-800 hover:text-gray-600 ${
                location.pathname === "/" ? "text-orange-500" : ""
              }`}
            >
              Home
            </li>
          </NavLink>
          <NavLink to="/faq" className="block">
            <li
              className={`font-bold text-gray-800 hover:text-gray-600 ${
                location.pathname === "/faq" ? "text-orange-500" : ""
              }`}
            >
              FAQs
            </li>
          </NavLink>
          <NavLink to="/write-story" className="block">
            <li
              className={`font-bold text-gray-800 hover:text-gray-600 ${
                location.pathname === "/write-story" ? "text-orange-500" : ""
              }`}
            >
              Write Your Story
            </li>
          </NavLink>
          <NavLink to="/blogs" className="block">
            <li
              className={`font-bold text-gray-800 hover:text-gray-600 ${
                location.pathname === "/blogs" ? "text-orange-500" : ""
              }`}
            >
              Blogs
            </li>
          </NavLink>
          <NavLink to="/about-us" className="block">
            <li
              className={`font-bold text-gray-800 hover:text-gray-600 ${
                location.pathname === "/about-us" ? "text-orange-500" : ""
              }`}
            >
              About Us
            </li>
          </NavLink>
          <li>
            {authUser ? (
              <div className="cursor-pointer font-bold" onClick={handleLogout}>
                Logout
              </div>
            ) : (
              <NavLink to={"/login"} className="block">
                <li
                  className={`font-bold text-gray-800 hover:text-gray-600 ${
                    location.pathname === "/login" ? "text-orange-500" : ""
                  }`}
                >
                  LogIn
                </li>
              </NavLink>
            )}
          </li>
          {authUser ? (
            <NavLink to="/reports" className="block">
              <li
                className={`font-bold text-gray-800 hover:text-gray-600 ${
                  location.pathname === "/reports" ? "text-orange-500" : ""
                }`}
              >
                Reports
              </li>
            </NavLink>
          ) : (
            ""
          )}
          {!authUser && (
            <NavLink to="/signup" className="block">
              <li
                className={`font-bold text-gray-800 hover:text-gray-600 ${
                  location.pathname === "/signup" ? "text-orange-500" : ""
                }`}
              >
                SignUp
              </li>
            </NavLink>
          )}
        </ul>
        <div
          className={`md:hidden cursor-pointer ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="w-7 h-[3px] bg-slate-900 "></div>
          <div className="w-7 h-[3px] bg-slate-900 my-1.5"></div>
          <div className="w-7 h-[3px] bg-slate-900 my-1.5"></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
