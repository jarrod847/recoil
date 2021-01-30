import React from "react";
import { useRecoilState } from "recoil";
import filteredTodo from "../recoil/selector";
import filteredState from "../recoil/todoFilter";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(filteredState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoListFilters;
