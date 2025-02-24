
import React from "react";
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; 
import store from "./redux/store";  
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserContext>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </UserContext> 
  </StrictMode>

  
)
