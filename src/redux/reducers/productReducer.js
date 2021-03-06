import { ADD_QUANTITY, ADD_TO_BASKET, CLEAR_PRODUCTS, LOAD_PRODUCTS, SHOW_PRODUCT, SUB_BASKET_QUANTITY } from "../actions/actionsType";

const initialState = {
  products: JSON.parse(localStorage.getItem('Products')) === null ? [] : JSON.parse(localStorage.getItem('Products')),
  basketProducts: JSON.parse(localStorage.getItem('Basket')) === null ? [] : JSON.parse(localStorage.getItem('Basket')),
  showProduct: false
}

//rewrite

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_PRODUCTS:
        localStorage.setItem('Products', JSON.stringify(action.payload));
        return {...state, products: JSON.parse(localStorage.getItem('Products')), showProduct: true}
      case CLEAR_PRODUCTS:
        return {...state, showProduct: false}
      case SHOW_PRODUCT:
        return {...state, showProduct: true}
      case ADD_TO_BASKET: {
        let tempProducts = state.products.map(item => {
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
        localStorage.setItem('Products', JSON.stringify(tempProducts));
        return {
          ...state,
          products: JSON.parse(localStorage.getItem('Products')),
          basketProducts: JSON.parse(localStorage.getItem('Basket'))
        }
      }
      case ADD_QUANTITY: {
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
      case SUB_BASKET_QUANTITY: {
        let tempBasket = []
        let tempProduct = []
        if(action.payload.quantity === 1) {
          tempBasket = state.basketProducts.filter(item => item.id !== action.payload.id)
          tempProduct = state.products.map(product => {
            if(product.id === action.payload.id) {
              product = {...product, quantity: 0}
            }
            return product
          })
          localStorage.setItem('Products', JSON.stringify(tempProduct));
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
          basketProducts: JSON.parse(localStorage.getItem('Basket')),
          products: JSON.parse(localStorage.getItem('Products'))
        }
      }
     default: return state;
    }
}