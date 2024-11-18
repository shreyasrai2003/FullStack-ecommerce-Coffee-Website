import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Item.css";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price">${props.price}</div>
      <button
        className="add-to-cart"
        onClick={() => {
          addToCart(props.id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
