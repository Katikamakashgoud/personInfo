import React from "react";
import { Link } from "react-router-dom";

function PanCard() {
  return (
    <div className="container">
      <h1>PAN Card Page</h1>
      <p>Here you can apply for or check PAN Card details.</p>
      <Link to="/" className="button">Go Back</Link>
    </div>
  );
}

export default PanCard;
