/**
 * return permutation result for *nums*.
 * @param {Number[]} nums the raw array used to calculate permutation.
 */
const permute = function(nums) {
  const helper = (nums) => {
      if (nums.length === 0) return [[]];
      const ans = [];
      for (let i = 0; i < nums.length; i++) {
          const top = nums.splice(i, 1)[0];
          ans.push(...helper(nums).map(v => [top, ...v]));
          nums.splice(i, 0, top);
      }
      return ans;
  }
  return helper(nums);
};

export default permute;

// console.log(permute([1,2,3]))