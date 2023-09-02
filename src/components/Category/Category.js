import React from "react";
import "./Category.scss";
import {AiOutlineArrowRight} from 'react-icons/ai'
import ProductDetail from "../ProductDetail/ProductDetail";
import Footer from "../footer/Footer";

function Category() {
  return (
    <>
      <div className="Category">
        <div className="hero">
          <div className="Category-content">
            <div className="right">
              <p className="main-heading">Recent addiction</p>
              <h2 className="main-head">Post-Poo Drops</h2>
              <p className="content">
                While we may think of these products as for the home—the
                bedroom, the mantelpiece, the window sill—many are equally as
                suitable in other settings.
              </p>
              <div className="primary-btn-category" id="prod">
              <p className="primary-content">Discover Post-Poo Drops</p>
                <div className="icon"><AiOutlineArrowRight/></div>
              </div>
            </div>
          </div>
          <div className="down-images">
            <h2 className="browse-products">Aromatically alike</h2>
            <div className="product-list">
              <ProductDetail />
              <ProductDetail />
              <ProductDetail />
            </div>
          </div>
          <div className="hero2">
            <div className="hero2-right">
              <div className="right-left">
                <h2 className="main-heading">For additional assistance</h2>
              </div>
              <div className="right-right">
                <p className="content">
                If you would like more guidance finding a formulation, our consultants are available to help via live assistance.
                </p>
                <div className="primary-btn-category1" id="prod">
                  <p className="primary-content">Speak to a real consultant</p>
                  <div className="icon"><AiOutlineArrowRight/></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Category;
