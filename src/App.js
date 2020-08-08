import React from "react";
import "./App.css";
import TodoList from "./components/todoList";
import TodoAdd from "./components/todoAdd";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoAdd />
      <TodoList />
    </div>
  );
}

// https://recoiljs.org/docs/basic-tutorial/atoms

export default App;
