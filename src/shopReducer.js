
// Defines the initial state of the shop.
// The products array stores all products currently added to the cart.
export const initialState = {
  products: [],
};

// Centralized state management for shop/cart operations.
const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // Adds a new product to the cart.
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, payload],
      };

    // Removes a product from the cart using its unique ID.
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };

    // Prevents invalid or unsupported actions from failing silently.
    default:
      throw new Error(`Unknown reducer action type: ${type}`);
  }
};

export default shopReducer;
