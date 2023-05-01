import { ADD_TODO } from "./constant";

const initialState = {
  listTodo: [],
  user: {
    name: "asd",
    age: 12,
  },
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodolist = [
        ...state.listTodo,
        { id: state.listTodo.length + 1, name: action.payload },
      ];
      return {
        ...state,
        listTodo: newTodolist,
      };
    default:
      return state;
  }
};
export default todoReducer;
