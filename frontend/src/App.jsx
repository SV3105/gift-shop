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

const App = () => {
  return (
    <>
      
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Routes>
      <Footer />
   
    </>
  );
};

export default App;
