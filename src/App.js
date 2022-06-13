import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/ProductsContext";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthProductContextProvider from "./contexts/authProductContext";

const App = () => {
  return (
    <AuthProductContextProvider>
         <ProductsContextProvider>
      <Header />
      <Routing />
      <Footer />
    </ProductsContextProvider>
    </AuthProductContextProvider>
 
  );
};

export default App;
