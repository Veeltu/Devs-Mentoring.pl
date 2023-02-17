nums = [-1, -2, -3, -4, -5];
target = -8;

const long = nums.length
const twoSum = function (nums, target) {
  let numberOne = '';
  let numberTwo = '';

  for (let i = 0; i < long; i++) {
    if (nums[i] <= target) {
      numberOne = i;
      for (let j = 0; j < long; j++) {
        if (i != j && nums[i] + nums[j] === target) numberTwo = j;
      }
    }
  }
  let solution = [numberTwo, numberOne];
  return solution;
};

twoSum();

console.log(twoSum);
