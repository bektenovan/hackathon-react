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
import OrderForm from "./components/OrderForm/OrderForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket";
import FieldCollection from "./components/Collections/FieldCollection/FieldCollection";

import CommentsForm from "./components/CommentsForm/CommentsForm";
import AboutUs from "./components/AboutUs/AboutUs";
import RangeCollection from "./components/Collections/RangeCollection/RangeCollection";
import NomadCollection from "./components/Collections/NomadCollection/NomadCollection";
const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route
          path="/basket"
          element={
            <>
              <Basket /> <OrderForm />
            </>
          }
        />
        <Route path="/comments" element={<CommentsForm />} />
        <Route path="/field-collection" element={<FieldCollection />} />
        <Route path="/range-collection" element={<RangeCollection />} />
        <Route path="/nomad-collection" element={<NomadCollection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
