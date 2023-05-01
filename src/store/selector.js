import { createSelector } from "reselect";

const rootSelect = (state) => state.todoReducer;

export const selectorTodolist = createSelector(rootSelect, (state) => {
  return state.listTodo;
});

export const selectorCurrentPage = createSelector(rootSelect, (state) => {
  return state.currentPage;
});
