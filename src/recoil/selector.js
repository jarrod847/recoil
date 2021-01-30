import itemArr from "./atom";
import filteredState from "./todoFilter";

const { selector } = require("recoil");

const filteredTodo = selector({
  key: "filteredTodo",
  get: ({ get }) => {
    const filter = get(filteredState);
    const list = get(itemArr);

    switch (filter) {
      case "Completed":
        return list.filter((item) => item.isComplete);
      case "Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default filteredTodo;
