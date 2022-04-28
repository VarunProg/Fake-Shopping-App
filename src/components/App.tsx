import { worker } from "../mocks/browser";
import "../styles/App.css";
import ProductList from "./ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProduct from "./NewProduct";
import Navbar from "./Navbar";
import About from "./About";
import { ToastContainer, toast } from "react-toastify";
import { store } from "../Store/Store";
import { Provider } from "react-redux";
import { createClient, Provider as UrqlProvider } from "urql";
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
  description: string;
}
const client = createClient({
  url: "http://localhost:3001/graphql",
  fetch: (...args) => fetch(...args),
});

const App = () => {
  return (
    <UrqlProvider value={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <ToastContainer position="top-center" />
          <Routes>
            <Route path="/" element={<ProductList />} />
            {/* <Route path="/About" element={<About />} /> */}
            <Route path="product/new" element={<NewProduct />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </UrqlProvider>
  );
};

export default App;
