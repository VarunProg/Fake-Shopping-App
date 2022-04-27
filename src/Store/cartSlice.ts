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
const str = localStorage.getItem("cart");
const json = str ? (JSON.parse(str) as typeof initialState) : initialState;

export const cartSlice = createSlice({
  name: "cartState",
  initialState: json,
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
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalItems -= 1; // remove items from state
      // state.ids = state.ids.filter((id) => id !== action.payload.id);
      const ids = new Set([...state.ids]);
      ids.delete(action.payload.id);
      state.ids = [...ids];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
