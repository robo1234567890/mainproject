import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventHome from "./EventHome";
import EventCard from "./EventCard";
import VendorDetails from "./components/VendorDetails";
import CustomerLogin  from "./CustomerLogin";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route path="/vendor/:vendorId" element={<VendorDetails />} /> */}
    //     <Route path="/eventscard" element={<EventCard/>}/>
    //   </Routes>
    // </Router>
    <Router>
    <Routes>
      <Route path="/" element={<EventHome />} />
      <Route path="/events" element={<EventCard />} />
      <Route path="/customer-login" element={<CustomerLogin/>} />
    </Routes>
  </Router>
  );
};

export default App;
