/*
* As Valik said "За toString сразу в бан:)"
*
var findNumbers = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (String(nums[i]).length % 2 === 0) {
      // String returns current value but type of string and we can get length === колличество разрядов
      result++;
    }
  }

  return result;
};
*/

var findNumbers = function (nums) {
  return nums
    .map((item) => Math.ceil(Math.log10(item + 1)) % 2 === 0)
    .filter((item) => !!item).length;
};
