
import React from "react";
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartContext.jsx";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserContext>
  <BrowserRouter>
  <CartProvider> 
  <App />
  </CartProvider>
  </BrowserRouter>
  </UserContext> 
  </StrictMode>

  
)
