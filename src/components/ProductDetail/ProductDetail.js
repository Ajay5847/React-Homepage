import React from "react";
import dummyImg from "../../assets/AromaticImg.webp";
import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="product-container">
        <div className="product-img">
          <div className="image">
            <img src={dummyImg} alt="A" id="img" />
          </div>
        </div>
        <div className="product-info">
          <p className="title">Kagerou Aromatique Incense</p>
          <p className="price">$310.00 / 33 sticks</p>
        </div>
        <div className="aroma">
          <p className="head">
            <b>Aroma</b>
          </p>
          <p className="desc">Green, herbaceous, woody</p>
        </div>
        <div className="aroma">
          <p className="head">
            <b>Dimensions</b>
          </p>
          <p className="desc1">Incense: 150 mm x 2 mm x 2 mm burn time approximately 30 minutes per stick; incense holder: 20 mm x 5 mm </p>
        </div>
        <div className="primary-btn" id="prod" >Add to Cart - $310.00</div>
      </div>
    </div>
  );
}

export default ProductDetail;
