/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minLen = 0;

  strs.forEach((item, index) => {
    minLen = index === 0 ? item.length : Math.min(minLen, item.length);
  });

  let result = "";

  for (let i = 0, char = ""; i < minLen; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (j === 0) {
        char = strs[j][i];
      } else if (char !== strs[j][i]) {
        char = "";
        break;
      } else {
        continue;
      }
    }
    if (char === "") {
      break;
    } else {
      result += char;
    }
  }

  return result;
};
