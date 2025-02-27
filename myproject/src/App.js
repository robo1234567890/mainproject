// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import EventHome from "./EventHome";
// import EventCard from "./EventCard";
// import VendorDetails from "./components/VendorDetails";
// import CustomerLogin  from "./CustomerLogin";
// import Marrage from "./Marrage";
// const App = () => {
//   return (
//     // <Router>
//     //   <Routes>
//     //     <Route path="/" element={<Home />} />
//     //     {/* <Route path="/vendor/:vendorId" element={<VendorDetails />} /> */}
//     //     <Route path="/eventscard" element={<EventCard/>}/>
//     //   </Routes>
//     // </Router>
//   //   <Router>
//   //   <Routes>
//   //     <Route path="/" element={<EventHome />} />
//   //     <Route path="/events" element={<EventCard />} />
//   //     <Route path="/customer-login" element={<CustomerLogin/>} />
     
//   //   </Routes>
//   // </Router>
//   <Marrage/>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure to import BrowserRouter

import Home from "./pages/Home";
import EventHome from "./EventHome";
import EventCard from "./EventCard";
import VendorDetails from "./components/VendorDetails";
import CustomerLogin from "./CustomerLogin";
import Marrage from "./Marrage";

const App = () => {
  return (
    <Router> {/* Wrap the entire application with Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-home" element={<EventHome />} />
        <Route path="/events" element={<EventCard />} />
        <Route path="/vendor-details" element={<VendorDetails />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/marrage" element={<Marrage />} /> {/* Make sure this route is included */}
      </Routes>
    </Router>
  );
};

export default App;
