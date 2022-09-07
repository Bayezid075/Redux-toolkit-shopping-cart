import { createSlice } from "@reduxjs/toolkit";
const initialState = { itemList: [], quantity: 0, isShowCart: false };
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
        state.quantity++;
      }
    },
    removeCart(state) {},
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;
