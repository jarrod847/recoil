import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import itemArr from "../recoil/atom";
import filteredTodo from "../recoil/selector";
import Todo from "./todo";
import TodoItem from "./todoItem";
import TodoListFilters from "./todoListFilter";
import TodoListStats from "./todoStats";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodo);
  console.log(todoList);
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
