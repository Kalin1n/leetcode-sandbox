const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      delete nums[i];
    }
  }
  nums.sort((a) => !!a);
  nums.filter((a) => !!a).length;
  return nums.filter((a) => new Number(a)).length;
};

console.log(removeElement([3, 2, 2, 3], 3));
