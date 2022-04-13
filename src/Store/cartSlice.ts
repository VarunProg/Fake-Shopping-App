import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iproduct } from "../components/App";
import { enableMapSet } from "immer";
import { IProduce } from "immer/dist/internal";
enableMapSet();

export interface CartState {
  totalItems: number;
  items: Iproduct[];
  ids: Iproduct["id"][];
}

const initialState: CartState = {
  totalItems: 0,
  items: [],
  ids: [],
};

export const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Iproduct>) => {
      const ids = new Set([...state.ids]); // first time empty
      const isProductAlreadyInCart = ids.has(action.payload.id); // checking id

      if (!isProductAlreadyInCart) {
        state.items.push(action.payload);
        state.ids.push(action.payload.id);
        state.totalItems += 1;
      }
    },
    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      console.log(action.payload.id);
      // state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalItems -= 1; // remove items from state
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
