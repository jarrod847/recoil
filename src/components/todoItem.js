import React, { useState } from "react";
import { useRecoilState } from "recoil";
import itemArr from "../recoil/atom";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(itemArr);
  const [editItem, setItem] = useState(false);
  const theItem = todoList.findIndex((list) => list === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItem(todoList, theItem, {
      ...item,
      txt: value,
    });

    setTodoList(newList);
  };

  const trueOrFalse = () => {
    if (!editItem) {
      setItem(true);
    } else {
      setItem(false);
    }
  };
  const changeItem = () => {
    return editItem ? (
      <input type="text" value={item.txt} onChange={editItemText} />
    ) : (
      <p>{item.txt}</p>
    );
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
      <div className="item">
        {changeItem()}
        <input type="checkbox" checked={item.isComplete} onChange={complete} />
        <button onClick={trueOrFalse}>{editItem ? "set" : "edit"}</button>
        <button onClick={deleteItem}>Delete</button>
      </div>
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
