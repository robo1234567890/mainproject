import React from "react";
import { Link } from "react-router-dom";
import './VendorCard.css'; // Import the external CSS file

const VendorCard = ({ vendor }) => {
  return (
    <div className="whole">
      <div className="vendor-card">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="vendor-image"
        />
        <h2 className="vendor-name">{vendor.name}</h2>
        <p className="vendor-location">
          {/* Inline SVG for location pin */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            className="location-icon"
          >
            <path d="M12 0C8.13 0 5 3.13 5 6c0 3.39 4 10 7 13 3-3 7-9.61 7-13 0-2.87-3.13-6-7-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
          {vendor.location}
        </p>
        <p className="vendor-price">{vendor.price}</p>
        <p>
          {vendor.capacity} | {vendor.rooms}
        </p>
        <p className="vendor-details">
          ⭐ {vendor.rating} ({vendor.reviews} reviews)
        </p>
        <Link to={`/vendor/${vendor.id}`} className="link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VendorCard;
