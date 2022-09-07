// some importent thing about redux toolkit ,
// redux toolkit similer to Redux but here all thing like Actions and reducer are worked together and its
// have all these thing binded and work together in CartSlice function

import { createSlice } from "@reduxjs/toolkit";
const initialState = { itemList: [], TotalQuantity: 0, isShowCart: false };
const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCart(state, action) {
      const newItemFromAction = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItemFromAction.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItemFromAction.price;
      } else {
        state.itemList.push({
          id: newItemFromAction.id,
          price: newItemFromAction.price,
          quantity: 1,
          totalPrice: newItemFromAction.price,
          name: newItemFromAction.name,
        });
        state.TotalQuantity++;
      }
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      console.log(existingItem);
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.TotalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.isShowCart = !state.isShowCart;
    },
    AllTotalPrice(state) {},
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;
