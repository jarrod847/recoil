const { selector } = require("recoil");
const { default: itemArr } = require("./atom");

const StatsState = selector({
  key: "statsState",
  get: ({ get }) => {
    const todoList = get(itemArr);
    const listLength = todoList.length;
    const totalComplete = todoList.filter((item) => item.isComplete).length;
    const notComplete = listLength - totalComplete;
    const percent = listLength === 0 ? 0 : (totalComplete / listLength) * 100;

    return {
      listLength,
      totalComplete,
      notComplete,
      percent,
    };
  },
});

export default StatsState;
