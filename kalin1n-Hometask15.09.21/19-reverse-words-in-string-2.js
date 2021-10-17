/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((word) => word.length)
    .map((word) => word.split``.reverse().join``).join` `; //.reverse()
};
