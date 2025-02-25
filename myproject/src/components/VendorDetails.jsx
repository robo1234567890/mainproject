import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./VendorDetails.css"; // Import the external CSS
import Header from '/workspaces/mainproject/myproject/src/Header.jsx';
import Footer from '/workspaces/mainproject/myproject/src/Footer.jsx'
const VendorDetails = () => {
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/vendors.json")
      .then((res) => res.json())
      .then((data) => {
        const foundVendor = data.find((v) => v.id === parseInt(vendorId));
        if (foundVendor) {
          setVendor(foundVendor);
        } else {
          setError("Vendor not found!");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching vendor details.");
        setLoading(false);
      });
  }, [vendorId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
       <Header/>
    <div  className="container">
      <div className="left">
      <img
        src={vendor.image}
        alt={vendor.name}
        className="vendor-image"
      />
      </div>
      <div className="right">
    <div className="vendor-details-container">
     
      <h1 className="vendor-name">{vendor.name}</h1>
      <p className="vendor-location">{vendor.location}</p>
      <p className="vendor-price">{vendor.price}</p>
      <p className="vendor-details-info">
        {vendor.capacity} | {vendor.rooms}
      </p>
      <p className="vendor-rating">
        ⭐ {vendor.rating} ({vendor.reviews} reviews)
      </p>
      <Link to="/" className="link">
        Back to Vendors
      </Link>
      <button>Book Now</button>
      </div>
      </div>
      </div>
      <Footer/>
      </div>
  );
};

export default VendorDetails;
