import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  // Derived State: Calculate the total automatically on every render
  const total = state.products.reduce((sum, item) => sum + (item.price || 0), 0);

  const AddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product.id, // passing ID to match reducer
    });
  };

  const values = {
    products: state.products,
    total, // pass the derived total down to components
    AddToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used inside of a ShopProvider");
  }
  return context;
};

export default useShop;