import { ADD_TODO } from "./constant";

export const addTodolist = (item) => ({
  type: ADD_TODO,
  payload: item,
});
