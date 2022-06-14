import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/ProductsContext";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthProductContextProvider from "./contexts/authProductContext";
import BasketContextProvider from "./contexts/basketContext";

const App = () => {
  return (
    <AuthProductContextProvider>
         <ProductsContextProvider>
          <BasketContextProvider>
            <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
      </BrowserRouter>
      </BasketContextProvider>
    </ProductsContextProvider>
    </AuthProductContextProvider>
 
  );
};

export default App;
