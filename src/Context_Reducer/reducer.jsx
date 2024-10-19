export const initialState = {
  products: [], // Initially, the cart is empty
  total: 0, // Initial total price
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: action.payload, // Update the products in the cart
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: action.payload, // Remove the product
      };
    case "UPDATED_PRICE":
      return {
        ...state,
        total: action.payload, // Update the total price
      };
    default:
      return state;
  }
};

export default reducer;
