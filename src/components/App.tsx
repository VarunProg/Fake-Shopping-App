import { useEffect, useState } from 'react'
import { worker } from '../mocks/Browser'

import '../styles/App.css'
// started mock server
worker.start();
const App = () => {
   
 // defined type for products
 interface Iproduct{
   name:string;
   price: number;
  rating:number;
  catergory:string;
  image: string;
  id:string
 }
   const [products, setProducts] =useState<Iproduct[]>([]);
   
  //fetching data from mock server Api
  const getProducts = async () =>{
     const res = await fetch ('/products');
     const json = await res.json()
     console.log(json.items)
     setProducts(json.items);
  }
  useEffect( ()=>{
   // call getUsers function
   getProducts();
  },[])
  return (
   <>
      <h1>Hi Varun</h1>
   </>
  )
}

export default App;

