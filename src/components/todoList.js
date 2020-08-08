import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import itemArr from "../recoil/atom";
import Todo from "./todo";

const TodoList = () => {
  const todoList = useRecoilValue(itemArr);
  console.log(todoList);
  return (
    <div>
      {todoList.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
