import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import FAQPage from "./pages/faq/Faq";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Chat from "./pages/chatbot/Chat";
import Reports from "./pages/reports/Reports";
import AboutUs from "./pages/aboutUs/AboutUs";
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Footer from "./components/footer/Footer";
import StoryPage from "./pages/story/storyPage";
import BlogPage from "./pages/blogs/blogPage";

const AppLayout = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/chat" element={<Chat />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/write-story" element={<StoryPage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
