import {showLoader, putData, showProduct, hideLoader, changeStatus} from '../actions/actions';

export const loadProductsData = (status) => async (dispatch) => {
  console.log('loadProductsData')
  try{
    dispatch(showLoader())
    const response = await fetch('https://my-json-server.typicode.com/denisosadchyi1/mockend-db/products')
    const json = await response.json()
    console.log(status)
    if(status) {
      dispatch(putData(json))
    }
    dispatch(changeStatus())
    dispatch(showProduct())
    // dispatch(clearProducts())
    dispatch(hideLoader())
  }
  catch(e) {
    // dispatch(showAlert('Something go wrong'))
    console.log(e)
    dispatch(hideLoader())
  }
} 