import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Collections from "./components/Collections/Collections";

import LoginForm from "./components/LoginForm/LoginForm";
import ProductList from "./components/ProductList/ProductList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import EditProduct from "./components/EditProduct/EditProduct";
import HomePage from "./components/ProductList/HomePage/Homepage";
import Details from "./components/Details/Details";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
