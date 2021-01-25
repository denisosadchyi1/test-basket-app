import { LOAD_PRODUCTS, SHOW_LOADER, HIDE_LOADER, CLEAR_PRODUCTS, ADD_TO_BASKET, ADD_QUANTITY, ADD_BASKET_QUANTITY, SUB_BASKET_QUANTITY } from "./actionsType"

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

export const loadProducts = () => async (dispatch) => {
    try{
      dispatch(showLoader())
      const response = await fetch('https://my-json-server.typicode.com/denisosadchyi1/mockend-db/products')
      const json = await response.json()
      dispatch(putData(json))
      dispatch(hideLoader())
    }
    catch(e) {
      // dispatch(showAlert('Something go wrong'))
      console.log(e)
      dispatch(hideLoader())
    }
}  

export const clearProducts = () => {
  return {
    type: CLEAR_PRODUCTS
  }
}

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