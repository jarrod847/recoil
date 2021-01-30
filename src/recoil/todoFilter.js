const { atom } = require("recoil");

const filteredState = atom({
  key: "todoFilter",
  default: "All",
});

export default filteredState;
