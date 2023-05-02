import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constant";
import { v4 as uuidv4 } from "uuid";

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
        { id: uuidv4(), name: action.payload },
      ];
      return {
        ...state,
        listTodo: newTodolist,
      };
    case DELETE_TODO:
      console.log("action.payload:", action.payload);
      console.log(
        `bạn đã xoá name :${action.payload.name} với id:${action.payload.id}`
      );
      return {
        ...state,
        listTodo: state.listTodo.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case EDIT_TODO:
      console.log("1:", 1);
      return {
        ...state,
        listTodo: state.listTodo.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.updatedItem }
            : item
        ),
      };

    default:
      return state;
  }
};
export default todoReducer;
