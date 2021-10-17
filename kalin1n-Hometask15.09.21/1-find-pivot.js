const findPivot = (nums) => {
  let temp = [];

  for (let i = 0, sum = 0; i < nums.length; i++, sum = 0) {
    for (j = i; j >= 0; j--) {
      sum += nums[j];
    }
    temp.push(sum);
  }

  for (let i = 0; i < temp.length; i++) {
    let left = temp[i - 1] || 0;
    const right = temp[temp.length - 1] - left - nums[i];

    if (left === right) {
      return i;
    }
  }
  return -1;
};

console.log(findPivot([1, 7, 3, 6, 5, 6]));
