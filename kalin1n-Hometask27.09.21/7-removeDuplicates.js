const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      delete nums[i];
    }
  }

  return nums.sort((a, b) => a - b).filter((a) => new Number(a)).length;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
