import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! create
  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  //!read
  async function getProducts() {
    let res = await axios(API);
    // console.log(res)
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  }
  // console.log(state.products)

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        createProduct,
        getProducts,
      }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;