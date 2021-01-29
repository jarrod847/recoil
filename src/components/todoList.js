import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import itemArr from "../recoil/atom";
import Todo from "./todo";
import TodoItem from "./todoItem";

const TodoList = () => {
  const todoList = useRecoilValue(itemArr);
  console.log(todoList);
  return (
    <div>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
