import { LOAD_PRODUCTS } from "./actionsType"

export const putData = (data) => {
  return {
    type: LOAD_PRODUCTS,
    payload: data
  }
}

export const loadProducts = () => async (dispatch) => {
    const response = await fetch('https://my-json-server.typicode.com/denisosadchyi1/mockend-db/products')
    const json = await response.json()
    // console.log(json)
    dispatch(putData(json))
}  