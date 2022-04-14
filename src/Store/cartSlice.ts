import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iproduct } from "../components/App";
import { enableMapSet } from "immer";
import { IProduce } from "immer/dist/internal";
enableMapSet();

export interface CartState {
  totalItems: number;
  items: Iproduct[];
  ids: Set<Iproduct["id"]>;
}

const initialState: CartState = {
  totalItems: 0,
  items: [],
  ids: new Set(),
};

export const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Iproduct>) => {
      // const ids = new Set([...state.ids]); // first time empty

      const isProductAlreadyInCart = state.ids.has(action.payload.id); // checking id

      if (!isProductAlreadyInCart) {
        return {
          ids: new Set([...state.ids, action.payload.id]),
          totalItems: state.totalItems + 1,
          items: [...state.items, action.payload],
        };
      }
      return state;
    },
    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      console.log(action.payload.id);
      // state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalItems -= 1; // remove items
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
