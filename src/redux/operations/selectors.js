import { createSelector } from 'reselect'

export const selectNumOfDoneTodos = createSelector(
  state => state.products.products,
  todos => todos.filter(todo => todo.isDone).length
)