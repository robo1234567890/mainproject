import React, { useEffect, useState } from "react";
import VendorCard from "../components/VendorCard";

const Home = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/vendors.json")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading vendors...</p>;

  // Inline styles for grid layout
  const gridStyle = {
    display: "flex",
    flexWrap: "wrap", // Corrected property name
    gap: "1.5rem", // Gap between flex items
    padding: "1.5rem", // Padding around the container
  };

  return (
    <div style={gridStyle}>
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
};

export default Home;
