import { useEffect, useState } from "react";
import { worker } from "../mocks/Browser";
import "../styles/App.css";
import ProductItem from "./ProductItem";
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
  const [products, setProducts] = useState<Iproduct[]>([]);

  //fetching data from mock server Api
  const getProducts = async () => {
    const res = await fetch("/products");
    const json: {
      items: Iproduct[];
      success: boolean;
      total: number;
    } = await res.json();
    console.log(json.items);
    setProducts(json.items);
  };
  useEffect(() => {
    // call getUsers function
    getProducts();
  }, []);
  return (
    <>
      {/* sending state as a prop */}
      <div className="container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;
