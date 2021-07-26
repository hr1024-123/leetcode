/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function searchRange(nums, target) {
  const n = nums.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      let start = mid - 1;
      let end = mid + 1;
      while (start >= 0 && nums[start] === nums[mid]) {
        start -= 1;
      }
      while (end <= n - 1 && nums[end] === nums[mid]) {
        end += 1;
      }
      return [start + 1, end - 1];
    }
  }
  return [-1, -1];
}

searchRange.chineseName = '搜索范围';

searchRange.example = `给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109`;
