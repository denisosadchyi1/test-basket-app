import { ADD_BASKET_QUANTITY, ADD_QUANTITY, ADD_TO_BASKET, CLEAR_PRODUCTS, LOAD_PRODUCTS } from "../actions/actionsType";

const initialState = {
  products: [],
  basketProducts: []
}

// export const productReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case LOAD_PRODUCTS:
//       return {...state, products: action.payload}
//     case CLEAR_PRODUCTS:
//       return {...state, products: []}
//     case ADD_TO_BASKET:
//       return {...state, basketProducts: [...state.basketProducts, ...state.products.filter(product => product.id === action.payload && product.quantity === 0)]}
//     case ADD_QUANTITY:
//       state.products.map(product => {
//         if (product.id === action.payload) {
//           product.quantity = product.quantity + 1
//           return {
//             ...state,
            
//           }
//         }
//       })
//     default: return state;
//   }
// }

export const productReducer = (state = initialState, action) => {
    if(action.type === LOAD_PRODUCTS){
      return {...state, products: action.payload}
    }
    if(action.type === CLEAR_PRODUCTS){
      return {...state, products: []}
    }
    if(action.type === ADD_TO_BASKET){
      let tempProduct = state.products.map(item => {
        if(item.id === action.payload) {
          item = {...item, quantity: item.quantity + 1}
        }
        return item
      })

      // let tempBasket = state.products.filter(product => product.id === action.payload)
      let tempBasket = state.products.filter(product => product.id === action.payload).map(item => {
        if (item.id === action.payload) {
          item = {...item, quantity: item.quantity + 1}
        }
        return item
      })
      return {
        ...state,
        products: tempProduct,
        basketProducts: [...state.basketProducts, ...tempBasket]
      }


      // return {...state, basketProducts: [...state.basketProducts, ...state.products.filter(product => product.id === action.payload)]}
    }
    if(action.type === ADD_QUANTITY){
      let tempBasket = state.basketProducts.map(item => {
        if(item.id === action.payload) {
          item = {...item, quantity: item.quantity + 1}
        }
        return item
      })
      return {
        ...state,
        basketProducts: tempBasket
      }
    }
  return state;
}