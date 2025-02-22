import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./VendorDetails.css"; // Import the external CSS

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
    
    <div className="vendor-details-container">
      <img
        src={vendor.image}
        alt={vendor.name}
        className="vendor-image"
      />
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
      </div>
  );
};

export default VendorDetails;
