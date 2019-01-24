const util = {
  getRandomString: function string() {
    return `_${Math.random()
      .toString(36)
      .substr(2, 8)}`;
  }
};
export default util;