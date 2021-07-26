/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export default function searchInsert(nums, target) {
  const n = nums.length;
  let l = 0;
  let r = n - 1;
  let pos = 0;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid] > target) {
      r = mid - 1;
      pos = mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
      pos = mid + 1;
    } else {
      return mid;
    }
  }
  return pos;
}

searchInsert.chineseName = '搜索插入';
searchInsert.example = `给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。



示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
示例 4:

输入: nums = [1,3,5,6], target = 0
输出: 0
示例 5:

输入: nums = [1], target = 0
输出: 0
 

提示:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为无重复元素的升序排列数组
-104 <= target <= 104`;
