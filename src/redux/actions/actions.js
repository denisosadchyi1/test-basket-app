import { LOAD_PRODUCTS, SHOW_LOADER, HIDE_LOADER, CLEAR_PRODUCTS, ADD_TO_BASKET, ADD_QUANTITY, ADD_BASKET_QUANTITY, SUB_BASKET_QUANTITY, CHANGE_STATUS, SHOW_PRODUCT } from "./actionsType"
import {loadProductsData} from '../operations/operations';

export const putData = (data) => {
  return {
    type: LOAD_PRODUCTS,
    payload: data
  }
}

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
}

export const changeStatus = () => {
  return {
    type: CHANGE_STATUS
  }
}

export const clearProducts = () => {
  return {
    type: CLEAR_PRODUCTS
  }
}

export const showProduct = () => {
  return {
    type: SHOW_PRODUCT
  }
}

//rewrite

export const addToBasket = (id) => {
  return {
    type: ADD_TO_BASKET,
    payload: id
    
  }
}

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    payload: id
  }
}

export const addBasketQuantity = (id) => {
  return {
    type: ADD_BASKET_QUANTITY,
    payload: id
  }
}

export const subBasketQuantity = (id, quantity) => {
  return {
    type: SUB_BASKET_QUANTITY,
    payload: {
      id,
      quantity
    }
  }
}