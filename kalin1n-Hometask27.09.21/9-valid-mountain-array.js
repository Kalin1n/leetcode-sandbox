// UNTESTED UNSUBMITED
const validMountainArray = (arr) => {
  let currentMax;
  let i = 0;

  for (; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      currentMax = arr[i + 1];
    } else if (currentMax > arr[i]) {
      currentMax = arr[i];
    } else {
      break;
    }
  }
  console.log(i);
  console.log(currentMax);
  return i === arr.length;
};

// console.log(validMountainArray([2, 1]));
// console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
