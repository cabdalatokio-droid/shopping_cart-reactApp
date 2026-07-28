export const initialState = {
  products: [],
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };

    default:
      throw new Error(`Unknown reducer action type: ${type}`);
  }
};

export default shopReducer;