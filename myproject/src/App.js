import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorDetails from "./components/VendorDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor/:vendorId" element={<VendorDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
