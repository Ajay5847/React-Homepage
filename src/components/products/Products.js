import React from "react";
import "./Products.scss";
import Product from "../product/Product";

function Products() {
  const imagesBucket = [
    {
      Url: "../../assets/Incense.jpeg",
      name: "Incense",
      key: 1,
    },
    {
      Url: "../../assets/Candle.jpeg",
      name: "Candles",
      key: 2,
    },
    {
      Url: "../../assets/Sprays.jpg",
      name: "Room Sprays",
      key: 3,
    },
    {
      Url: '../../assets/Oil Burner.jpeg',
      name: "Oil Burner Blends",
      key: 4,
    },
    {
      Url: '../../assets/Objects.webp',
      name: "Objects",
      key: 5,
    },
    {
      Url: "../../assets/Deodoriser.jpeg",
      name: "Deodorisers & Pets",
      key: 6,
    },
    {
      Url: "../../assets/Literature.avif",
      name: "Literature",
      key: 7,
    },
    {
        Url: "../../assets/Sprays.jpg",
        name: "Literature",
        key: 7,
      }
  ];
  return (
    <div className="Product">
      <h2 className="browse-products">Browse by product type</h2>
      <div className="products-list">
        {imagesBucket?.map((SingleProduct) => (
          <Product key={SingleProduct.key} SingleProduct={SingleProduct} />
        ))}
      </div>
    </div>
  );
}

export default Products;
