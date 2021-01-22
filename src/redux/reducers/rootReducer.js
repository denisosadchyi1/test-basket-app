import { LOAD_PRODUCTS } from "../actions/actionsType";

const initialState = {
  products: []
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS:
      return {...state, products: action.payload}
    default: return state;
  }
}