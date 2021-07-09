import React, { useState } from "react";
import { addTodo, delTodo, removeAll, editTodo } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function Todo() {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo App with Redux</h1>
      <input
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(inputData), setInputData(""));
        }}
      >
        Add
      </button>

      <br></br>

      {list.map((item) => {
        return (
          <div key={item.id}>
            <span> {item.data}</span>
            <button
              onClick={() => {
                dispatch(delTodo(item.id));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      <button
        onClick={() => {
          dispatch(removeAll());
        }}
      >
        Remove All
      </button>
    </div>
  );
}

export default Todo;
