import { CHANGE_STATUS, HIDE_LOADER, SHOW_LOADER } from "../actions/actionsType";

const initialState = {
  loading: false,
  status: JSON.parse(localStorage.getItem('Status')) === null ? true : JSON.parse(localStorage.getItem('Status'))
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case CHANGE_STATUS:
      return {...state, status: localStorage.setItem('Status', false )}
    case HIDE_LOADER:
      return {...state, loading: false}
    default: return state;
  }
}