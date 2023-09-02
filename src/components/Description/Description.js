import React from "react";
import dummy from "../../assets/addiction1.jpg";
import "./Description.scss";
import ProductDetail from "../ProductDetail/ProductDetail";

function Description() {
  return (
    <div className="Desc-container">
      <div className="first-content">
        <div className="left-desc">
          <h4>Recent addiction</h4>
          <h2>A trio of evocative aromas</h2>
          <p>
            Our Aromatique Incense have a unique square profile and are made
            without a bamboo core for a gentle burn.
          </p>
        </div>
        <div className="right-img">
          <img src={dummy} alt="Addiction" />
        </div>
      </div>
      <div className="product-list">
        <ProductDetail />
        <ProductDetail />
        <ProductDetail />
      </div>
      <div className="second-content">
        <div className="left-desc">
          <h4>Recent addiction</h4>
          <h2>A weighty companion</h2>
          <p>
            Designed for Aesop by Vogel Studio, the asymmetrical Bronze Incense
            Holder is a complementary addition to any table-setting, hearth or
            bookshelf.
          </p>
          <div className="left-img">
            <img src={dummy} alt="Addiction" />
          </div>
        </div>
        <div className="right-prod">
          <ProductDetail />
        </div>
      </div>
    </div>
  );
}

export default Description;
