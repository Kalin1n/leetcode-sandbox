const dominateIndex = (nums) => {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.indexOf(max)) {
      continue;
    }

    if (nums[i] * 2 > max) {
      return -1;
    } else {
      continue;
    }
  }

  return nums.indexOf(max);
};

console.log(dominateIndex([1, 2, 3, 4]));
