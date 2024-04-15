import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
