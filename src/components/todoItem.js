import React from "react";
import { useRecoilState } from "recoil";
import itemArr from "../recoil/atom";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(itemArr);
  const theItem = todoList.findIndex((list) => list === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItem(todoList, theItem, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const complete = () => {
    const newList = replaceItem(todoList, theItem, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItem(todoList, theItem);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={complete} />
      <button onClick={deleteItem}>Delete</button>
    </div>
  );

  function replaceItem(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  function removeItem(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
};

export default TodoItem;
