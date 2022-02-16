const test1 = require("./test1");
const { fn1, fn2 } = test1;

test("只有300元", () => {
  expect(fn1(300)).toBe("还行");
});
test("只有1200元", () => {
  expect(fn2(1200)).toBe("不错");
});
