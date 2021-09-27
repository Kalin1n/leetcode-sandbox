/*
const checkIfExist = (arr) => {
  let isExist = false;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr.indexOf(arr[i] * 2));
    if (arr.indexOf(arr[i] * 2) !== -1) {
      isExist = true;
      break;
    }
    continue;
  }

  return isExist;
};
*/

// falls test, not submited in leet code

const checkIfExist = (arr) => {
  const numsSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (numsSet.has(arr[i])) {
      return true;
    }
    numsSet.add(arr[i] * 2);
    numsSet.add(arr[i] / 2);
  }

  return false;
};
// This one with set is submiteed

console.log(checkIfExist([7, 1, 14, 11]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
