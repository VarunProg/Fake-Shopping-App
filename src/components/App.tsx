import { worker } from "../mocks/Browser";
import "../styles/App.css";
import ProductList from "./ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProduct from "./NewProduct";
import Navbar from "./Navbar";
import About from "./About";
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/About" element={<About />} />
        <Route path="product/new" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
