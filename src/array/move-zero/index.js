/**
 * @param {number[]} nums
 * @return {void}
 */
export default function moveZero(nums) {
  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] === 0) {
      let k = i + 1;
      while (nums[k] === 0 && k < nums.length - 1) {
        k += 1;
      }
      nums[i] = nums[k];
      nums[k] = 0;
    }
  }
}

moveZero.chineseName = '移动零';

moveZero.example = `给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。`;
