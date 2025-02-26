import React, { useEffect, useState } from "react";
import VendorCard from "../components/VendorCard";
import EventHome from '/workspaces/mainproject/myproject/src/EventHome.jsx'
import Header from "../Header";
import EventCard from "../EventCard";
// const Home = () => {
//   const [vendors, setVendors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/vendors.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setVendors(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading vendors...</p>;

//   // Inline styles for grid layout
//   const gridStyle = {
//     display: "flex",
//     flexWrap: "wrap", // Corrected property name
//     gap: "1.5rem", // Gap between flex items
//     padding: "1.5rem", // Padding around the container
//   };

//   return (
//     <div >
//       {/* <EventHome/> */}
      
//       <div style={gridStyle}>
// {vendors.map((vendor) => (
//   <VendorCard key={vendor.id} vendor={vendor} />
// ))}
// </div>
//     </div>
//   );
// };

// export default Home;
// {/*  */}

const Home=()=>{
    return(
      <div>
        <EventHome/>
      </div>
    )
}
export default Home;
{/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router> */}