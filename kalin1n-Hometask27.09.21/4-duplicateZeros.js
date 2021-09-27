// Dummy
/*
const duplicateZeros = (arr) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
    }
    arr.length = length;
  }

  return arr;
};
*/
const duplicateZeros = (arr) => {
  let i = 0,
    least = 0,
    cur = 0,
    reserve = new Uint32Array(arr.length);

  for (; i < arr.length; i++) {
    if (arr[i] === 0) {
      break;
    }
  }

  for (; i < arr.length; i++) {
    if (arr[i] === 0) {
      reserve[cur++] = 0;
    }
    reserve[cur++] = arr[i];
    arr[i] = reserve[least++];
  }
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 2, 3]));
