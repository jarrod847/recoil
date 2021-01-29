import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import itemArr from "../recoil/atom";

const TodoAdd = () => {
  const [newValue, setNewValue] = useState("");
  const setTodoList = useSetRecoilState(itemArr);

  const addTodo = () => {
    setTodoList((old) => [
      ...old,
      {
        id: getId(),
        txt: newValue,
        isComplete: false,
      },
    ]);
    setNewValue("");
  };

  const onChange = ({ target: { value } }) => {
    setNewValue(value);
  };

  return (
    <div>
      <input type="text" value={newValue} onChange={onChange}></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default TodoAdd;
