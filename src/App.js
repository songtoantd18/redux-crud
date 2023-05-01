import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodolist } from "./store/action";
import { selectorTodolist } from "./store/selector";

const App = () => {
  const dispatch = useDispatch();

  const todolist = useSelector(selectorTodolist);
  console.log("todolist:", todolist);

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodolist(inputValue));
  };
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      todolist
      <form>
        <label>name:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleAdd} type="submit">
          add
        </button>
      </form>
      <ul>
        {todolist.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              <button>edit</button>
              <button>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
