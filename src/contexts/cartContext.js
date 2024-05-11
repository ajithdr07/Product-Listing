import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
  totalItems: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = state.items.find((item) => action.payload.id === item.id);
      if (product) {
        product.total += 1;
        return {
          items: [...state.items],
          totalItems: state.totalItems + 1,
        };
      } else {
        const newProduct = action.payload;
        newProduct.total = 1;
        return {
          items: [...state.items, newProduct],
          totalItems: state.totalItems + 1,
        };
      }

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
