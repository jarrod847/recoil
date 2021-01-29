import React from "react";
import "./App.css";
import TodoList from "./components/todoList";
import TodoAdd from "./components/todoAdd";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoAdd />
      <div>
        <h2>Todos</h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
