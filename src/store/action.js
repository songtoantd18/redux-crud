import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constant";

export const addTodolist = (id) => ({
  type: ADD_TODO,
  payload: id,
});
export const deleteTodolist = (id, name) => ({
  type: DELETE_TODO,
  payload: { id, name },
});
export const editTodolist = (id, updatedItem) => {
  return {
    type: EDIT_TODO,
    payload: { id, updatedItem },
  };
};
