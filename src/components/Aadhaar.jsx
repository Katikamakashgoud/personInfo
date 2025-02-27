import React from "react";
import { Link } from "react-router-dom";

function AadhaarCard() {
  return (
    <div className="container">
      <h1>Aadhaar Card Page</h1>
      <p>Here you can apply for or check Aadhaar Card details.</p>
      <Link to="/" className="button">Go Back</Link>
    </div>
  );
}

export default AadhaarCard;
