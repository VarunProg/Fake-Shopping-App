import { useEffect, useState } from "react";

import { worker } from "../mocks/Browser";
import "../styles/App.css";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
// started mock server
worker.start();
// defined type for products and exported
export interface Iproduct {
  name: string;
  price: number;
  rating: number;
  catergory: string;
  image: string;
  id: string;
}
const App = () => {
  //set interface to state

  return (
    <>
      <ProductList />
    </>
  );
};

export default App;
