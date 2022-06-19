import React, { useContext } from "react";
import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Collections from "./components/Collections/Collections";
import LoginForm from "./components/LoginForm/LoginForm";
import ProductList from "./components/ProductList/ProductList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import EditProduct from "./components/EditProduct/EditProduct";
import HomePage from "./components/ProductList/HomePage/Homepage";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket"
import OrderForm from "./components/OrderForm/OrderForm";
import Comments from "./components/Comments/Comments"
import Like from "./components/Like/Like";
import AboutUs from "./components/AboutUs/AboutUs";
import FieldCollection from "./components/FieldCollection/FieldCollection";
import RangeCollection from "./components/RangeCollection/RangeCollection";
import NomadCollection from "./components/NomadCollection/NomadCollection";
import { authProductContext } from "./contexts/authProductContext";
import NotFound from "./NotFound/NotFound";
import PaymentForm from "./components/PaymentForm/PaymentForm";

const Routing = () => {
  const {isAdmin} = useContext(authProductContext)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route  path="/add-product"
        element={isAdmin ? <AddProduct/> : <Navigate replace to="*" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/edit/:id" element={isAdmin ? <EditProduct /> : <Navigate replace to="*" />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<><Details /><Like/> <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      /></>} />
        <Route path="/basket" element={<Basket />  } />
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route path="/field-collection" element={<FieldCollection />} />
        <Route path="/range-collection" element={<RangeCollection />} />
        <Route path="/nomad-collection" element={<NomadCollection />} />
        <Route path="/order" element ={ <OrderForm />} />
        <Route path="/payment" element ={ <PaymentForm />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
