import React from "react";
import "./Product.scss";
import dummy1 from '../../assets/Incense.jpeg';
import dummy2 from '../../assets/Candle.jpeg';
import dummy3 from '../../assets/Sprays.jpg';
import dummy4 from '../../assets/Oil Burner.jpeg';
import dummy5 from '../../assets/Objects.webp';
import dummy6 from '../../assets/Deodorisers.jpeg';
import dummy7 from '../../assets/Literature.avif';

function Product({SingleProduct}) {
  const imagesArray = [dummy1,dummy2,dummy3,dummy4,dummy5,dummy6,dummy7];

  return (
    <div className="Products" style={{backgroundImage: `url(${imagesArray[SingleProduct.key - 1]})`}}>
      <div className="content center">
        <h3 className="heading">{SingleProduct.name}</h3>
      </div>
    </div>
  );
}

export default Product;
