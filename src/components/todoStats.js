import React from "react";
import { useRecoilValue } from "recoil";
import StatsState from "../recoil/stats";

const TodoListStats = () => {
  const { listLength, totalComplete, notComplete, percent } = useRecoilValue(
    StatsState
  );

  return (
    <ul>
      <li>Total items: {listLength}</li>
      <li>Complete: {totalComplete}</li>
      <li>Not Finished: {notComplete}</li>
      <li>Percent Complete: {percent}</li>
    </ul>
  );
};

export default TodoListStats;
