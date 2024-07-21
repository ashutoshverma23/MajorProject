import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";

import AnimatedRoutes from "./components/routes/AnimatedRoutes";

const AppLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <AnimatedRoutes />
      <Footer className="mt-auto" />
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
