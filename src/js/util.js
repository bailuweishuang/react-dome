const util = {
  getRandomString: function string() {
    return `_${Math.random()
      .toString(36)
      .substr(2, 8)}`;
  },
  isString(obj) {
    return typeof obj === "string";
  },
  isFunction(obj) {
    return obj && typeof obj === "function";
  },
  isDefined(obj) {
    return typeof obj !== "undefined";
  },
  isObject(obj) {
    return typeof obj === "object";
  }
};
export default util;
