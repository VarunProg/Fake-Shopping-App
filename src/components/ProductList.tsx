import React, { useEffect, useState } from "react";
import { useAppSelector } from "../Hooks";
import { Iproduct } from "./App";
import ProductItem from "./ProductItem";
import { useQuery } from "urql";
const getProducts = `
 query{
   GetCategories{
     items
   }
 }
`;

const ProductList = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [result, reexecuteQuery] = useQuery({
    query: getProducts,
  });
  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="container">
      {products.map((product: Iproduct) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
