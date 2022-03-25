import React, { useEffect, useState } from "react";
import { Iproduct } from "./App";
import ProductItem from "./ProductItem";

const ProductList = () => {
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
    <div className="container">
      {products.map((product: Iproduct) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
