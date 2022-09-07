import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  const CartQuantity = useSelector((state) => state.cart.quantity);
  const quantity = CartQuantity;
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
