import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../store/Cart-Slice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const CartClick = () => {
    dispatch(CartActions.setShowCart());
  };

  const CartQuantity = useSelector((state) => state.cart.quantity);
  const quantity = CartQuantity;
  return (
    <div className="cartIcon">
      <h3 onClick={CartClick}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
