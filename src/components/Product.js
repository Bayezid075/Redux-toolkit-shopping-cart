import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/Cart-Slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const cartItem = useSelector((state) => state.cart.itemList);
  console.log(cartItem);
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(
      CartActions.addCart({
        name,
        id,
        price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addCartHandler}>Add to cart</button>
    </div>
  );
};

export default Product;
