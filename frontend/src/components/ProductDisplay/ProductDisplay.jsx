import React from "react";
import "./ProductDisplay.css";
import all_product from "../Assets/all_product.js";
import Item from "../Item/Item";

const ProductDisplay = () => {
  return (
    <div className="product-display">
      <h1>Our Shop</h1>
      <hr />
      <div className="products">
        {all_product.map((item, i) => {
          return (
            <Item
              className="item"
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
