import { ADD_BASKET_QUANTITY, ADD_QUANTITY, ADD_TO_BASKET, CLEAR_PRODUCTS, LOAD_PRODUCTS, SHOW_PRODUCT, SUB_BASKET_QUANTITY } from "../actions/actionsType";

const initialState = {
  products: JSON.parse(localStorage.getItem('Products')) === null ? [] : JSON.parse(localStorage.getItem('Products')),
  basketProducts: JSON.parse(localStorage.getItem('Basket')) === null ? [] : JSON.parse(localStorage.getItem('Basket')),
  showProduct: false
}

export const productReducer = (state = initialState, action) => {
    if(action.type === LOAD_PRODUCTS){
      localStorage.setItem('Products', JSON.stringify(action.payload));
      return {...state, products: JSON.parse(localStorage.getItem('Products')), showProduct: true}
    }
    if(action.type === CLEAR_PRODUCTS){
      return {...state, showProduct: false}
    }
    if (action.type === SHOW_PRODUCT){
      return {...state, showProduct: true}
    }
    if(action.type === ADD_TO_BASKET){
      let tempProduct = state.products.map(item => {
        if(item.id === action.payload) {
          item = {...item, quantity: item.quantity + 1}
        }
        return item
      })
      let tempBasket = state.products.filter(product => product.id === action.payload).map(item => {
        if (item.id === action.payload) {
          item = {...item, quantity: item.quantity + 1}
        }
        return item
      })
      let tmpArr = []
      tmpArr =  [...state.basketProducts, ...tempBasket]
      localStorage.setItem('Basket', JSON.stringify(tmpArr));
      console.log(tmpArr)
      localStorage.setItem('Products', JSON.stringify(tempProduct));
      return {
        ...state,
        products: JSON.parse(localStorage.getItem('Products')),
        basketProducts: JSON.parse(localStorage.getItem('Basket'))
      }
    }
    if(action.type === ADD_QUANTITY){
      let tempBasket = state.basketProducts.map(item => {
        console.log(item)
        if(item.id === action.payload) {
          item = {...item, quantity: item.quantity + 1}
        }
        return item
      })
      localStorage.setItem('Basket', JSON.stringify(tempBasket));
      return {
        ...state,
        basketProducts: JSON.parse(localStorage.getItem('Basket'))
      }
    }
    if(action.type === SUB_BASKET_QUANTITY) {
      let tempBasket = []
      if(action.payload.quantity === 1) {
        tempBasket = state.basketProducts.filter(item => item.id !== action.payload.id)
      } else if(action.payload.quantity > 1) {
        tempBasket = state.basketProducts.map(item => {
          if(item.id === action.payload.id) {
            item = {...item, quantity: item.quantity - 1}
          }
          return item
        })
      }
      localStorage.setItem('Basket', JSON.stringify(tempBasket));
      return {
        ...state,
        basketProducts: JSON.parse(localStorage.getItem('Basket'))
      }
    }
  return state;
}