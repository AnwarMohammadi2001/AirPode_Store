import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCard = (product) => {
    const updateBasket = state.products;
    updateBasket.push(product);
    updatedPrice(updateBasket);
    dispatch({ type: "ADD_TO_CART", payload: updateBasket });
  };
  const removeFromCard = (product) => {
    const updateBasket = state.products.filter(
      (currentproduct) => currentproduct.title !== product.title
    );
    updatedPrice(updateBasket);
    dispatch({ type: "REMOVE_FROM_CART", payload: updateBasket });
  };
  const updatedPrice = (product) => {
    let total = 0;
    product.forEach((product) => {
      total += product.price;
    });
    dispatch({ type: "UPDATED_PRICE", payload: total });
  };
  const value = {
    total: state.total,
    products: state.products,
    addToCard,
    removeFromCard,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
