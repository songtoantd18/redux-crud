import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodolist, deleteTodolist, editTodolist } from "./store/action";
import { selectorTodolist } from "./store/selector";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

const App = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState({ id: null, name: "" });
  const todolist = useSelector(selectorTodolist);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDelete = (id, name) => {
    dispatch(deleteTodolist(id, name));
  };
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  //////////////////////////////////////
  const handleEdit = (id, name) => {
    setEditMode(true);
    setEditItem({ id: id, name: name });
    setInputValue(name);
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      // Dispatch the edit action with the id and the updated name
      dispatch(editTodolist(editItem.id, { name: inputValue }));
      setInputValue("");
      setEditItem({ id: null, name: "" });
      setEditMode(false);
    } else {
      alert("điền lại ban ơi không được để chỗ trống trong này nhé");
    }
  };
  /////////////////////////////////
  const handleAdd = (e) => {
    if (inputValue.length > 5) {
      e.preventDefault();
      dispatch(addTodolist(inputValue));
      setInputValue("");
    } else {
      e.preventDefault();
      alert(
        "điền vào ô trống trên 5 chữ nhé bạn iu ơi, đừng để mình nhắc lại nhé!"
      );
      setInputValue("");
    }
  };
  return (
    <div
      // Thêm className cho các thành phần phù hợp với chế độ sáng/tối
      className={`container my-5 ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h1 className="text-center mb-5">Todo List by Redux</h1>

      {/* Thêm nút để thay đổi chế độ sáng/tối */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-secondary" onClick={handleToggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <form className="form">
        <div className="form-group">
          <label htmlFor="input-todo">Name:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What do you do?"
            className="form-control"
          />
        </div>
        <button
          className={editMode ? "btn btn-success mr-1" : "btn btn-primary mr-1"}
          onClick={editMode ? handleSave : handleAdd}
          type="submit"
        >
          {editMode ? "Save" : "Add"}
        </button>
        {editMode && (
          <button
            className="btn btn-secondary"
            onClick={() => {
              setEditMode(false);
              setInputValue("");
              setEditItem({ id: null, name: "" });
            }}
            type="button"
          >
            Cancel
          </button>
        )}
      </form>
      <ul
        // Thêm className cho các thành phần phù hợp với chế độ sáng/tối
        className={`list-group todolist mt-3 ${
          isDarkMode ? "bg-secondary" : ""
        }`}
      >
        {todolist.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{item.name}</span>
            <div>
              <button
                className={
                  editMode && editItem.id === item.id
                    ? "btn btn-warning mr-2"
                    : "btn btn-info mr-2"
                }
                onClick={() => handleEdit(item.id, item.name)}
              >
                {editMode && editItem.id === item.id ? "Cancel" : "Edit"}
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id, item.name)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
