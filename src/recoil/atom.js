const { atom } = require("recoil");

const itemArr = atom({
  key: "items",
  default: [],
});

export default itemArr;
