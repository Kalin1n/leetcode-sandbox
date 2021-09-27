var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      current = 0;
    } else {
      current++;
      max = Math.max(max, current);
    }
  }

  return max;
};

findMaxConsecutiveOnes([1, 1, 1, 1, 0, 1, 1, 1]);
