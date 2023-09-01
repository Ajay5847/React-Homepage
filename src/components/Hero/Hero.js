import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1 className="left">Aēsop</h1>
          <div className="right">
            <h2 className="main-heading">Home</h2>
            <div className="inside-content">
              While we may think of these products as for the home—the bedroom,
              the mantelpiece, the window sill—many are equally as suitable in
              other settings, including the office, the hotel room or the car,
              to enhance the interior.
            </div>
          </div>
        </div>
      </div>
      <div className="products-nav">
        <div className="products-ul">
          <p className="single-prod">All Home |</p>
          <p className="single-prod">Home</p>
          <p className="single-prod">Literature</p>
          <p className="single-prod">Home Gifts</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
