import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from './pages/Signup'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from './components/Footer'
import Collections from './pages/Collections'
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Cart from './pages/Cart'
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/Contactus";

const App = () => {
  return (
    <>
      
      <Header />
      <CartProvider>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      </CartProvider>
      <Footer />
   
    </>
  );
};

export default App;
