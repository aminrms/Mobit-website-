import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const sumItems = (item) => {
  const itemsCounter = item.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = item
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return {
    itemsCounter,
    total,
  };
};
const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "add-item":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
          checkout: false,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
      };
    case "remove-item":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems ],
        // ...sumItems(state.selectedItems),
      };
    case "increase":
      const indexItemIn = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[indexItemIn].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "decrease":
      const indexItemDe = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[indexItemDe].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "checkout":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "clear":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
