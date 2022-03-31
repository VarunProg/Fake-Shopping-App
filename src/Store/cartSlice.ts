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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.totalItems += 1;
      state.items.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
