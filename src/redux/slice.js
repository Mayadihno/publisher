import { createSlice } from "@reduxjs/toolkit";

const getInitialCartItems = () => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        return JSON.parse(storedCart);
      }
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
    }
  }
  return [];
};

const initialState = {
  cartItems: getInitialCartItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i._id === item._id);
      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        state.cartItems.push(item);
      }
      if (
        typeof window !== "undefined" &&
        typeof localStorage !== "undefined"
      ) {
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);
      if (
        typeof window !== "undefined" &&
        typeof localStorage !== "undefined"
      ) {
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    updateCartItemQty: (state, action) => {
      const { _id, qty } = action.payload;
      const item = state.cartItems.find((i) => i._id === _id);
      if (item) {
        item.qty = qty;
      }
      if (
        typeof window !== "undefined" &&
        typeof localStorage !== "undefined"
      ) {
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      if (
        typeof window !== "undefined" &&
        typeof localStorage !== "undefined"
      ) {
        localStorage.removeItem("cart");
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateCartItemQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
