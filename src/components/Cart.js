import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../store/Cart-Slice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const CartClick = () => {
    dispatch(CartActions.setShowCart());
  };

  const CartQuantity = useSelector((state) => state.cart.TotalQuantity);

  return (
    <div className="cartIcon">
      <h3 onClick={CartClick}>Cart: {CartQuantity} Items</h3>
    </div>
  );
};

export default Cart;
