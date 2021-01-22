import { CLEAR_PRODUCTS, LOAD_PRODUCTS } from "../actions/actionsType";

const initialState = {
  products: []
}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS:
      return {...state, products: action.payload}
    case CLEAR_PRODUCTS:
      return {...state, products: []}
    default: return state;
  }
}