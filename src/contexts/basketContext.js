import React, { useReducer } from "react";


export const basketContext = React.createContext();

const INIT_STATE = {
    basket: null,
    count: 0,
}

function reducer(state = INIT_STATE, action){
    switch(action.type){
        case "GET_BASKET":
            return {...state, basket:action.payload,  count:action.payload.products.length};
            default:
                return state;
    }
}

const BasketContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
  

    function addProductToBasket(products){
        let basket = JSON.parse(localStorage.getItem("basket"));
        if(!basket){
            basket = {
                products:[],
                totalPrice:0
            }
        }

        let newProduct = {
            item: products,
            count: 1,
            subPrice: products.price
        }
        let isProductInBasket = basket.products.some((item)=> item.item.id === products.id)
        if(isProductInBasket){
        //для удаления
           basket.products = basket.products.filter((item)=> item.item.id !== products.id)
        }else{
            basket.products.push(newProduct)
        }

        localStorage.setItem("basket", JSON.stringify(basket))
        getBasket();
    }
    function checkProductInBasket(products){
        let basket = JSON.parse(localStorage.getItem("basket"));
        if(!basket){
            basket = {
                products: [],
                totalPrice: 0
            };
        };
        let isProductInBasket  = basket.products.some((item)=> item.item.id === products.id);
        return isProductInBasket;
    }

    function getBasket(){
        let basket = JSON.parse(localStorage.getItem("basket"));
        if(!basket){
            basket = {
                products: [],
                totalPrice: 0
            };
        };
        basket.totalPrice = basket.products.reduce((prev, curr)=> prev + curr.subPrice, 0)
        dispatch({
            type: "GET_BASKET", 
            payload: basket,
        })
      }

        function changeProductCount(count, id){
            if(count <= 0){
                count = 1;
            }
            let basket  = JSON.parse(localStorage.getItem("basket"));
            basket.products = basket.products.map((item)=>{
                if(item.item.id === id){
                    item.count = count;
                    item.subPrice = item.item.price * item.count;
                }
                return item;
            })
            localStorage.setItem("basket", JSON.stringify(basket));
            getBasket();
        }
        function deleteFromBasket(id){
            let basket = JSON.parse(localStorage.getItem('basket'));
            basket.products = basket.products.filter(item => item.item.id
              !== id);
              localStorage.setItem('basket', JSON.stringify(basket));
              console.log("BASKET")
      getBasket();
       
    }
    return (<basketContext.Provider value={ { 
        basket: state.basket,
        count: state.count,
        addProductToBasket,checkProductInBasket,  getBasket, changeProductCount, deleteFromBasket}}>{children}</basketContext.Provider>)
}
export default BasketContextProvider;