import { ADD_TO_BASKET, CLEAR_PRODUCTS, LOAD_PRODUCTS } from "../actions/actionsType";

const initialState = {
  products: [],
  basketProducts: []
}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS:
      return {...state, products: action.payload}
    case CLEAR_PRODUCTS:
      return {...state, products: []}
    case ADD_TO_BASKET:
      return {...state, basketProducts: [...state.basketProducts, ...state.products.filter(product => product.id === action.payload)]}
    default: return state;
  }
}