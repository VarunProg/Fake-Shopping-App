import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iproduct } from "../components/App";

export interface CartState {
  totalItems: number;
  items: Iproduct[];
}

const initialState: CartState = {
  totalItems: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Iproduct>) => {
      state.totalItems += 1;
      state.items.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      console.log(action.payload.id);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalItems -= 1; // remove items from state
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
