function fn1(n1) {
  return n1 >= 200 ? "还行" : "合格";
}
function fn2(n1) {
  return n1 >= 1000 ? "不错" : "优秀";
}
module.exports = {
  fn1,
  fn2,
};
