export default function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const res = [];
  set2.forEach((v) => {
    if (set1.has(v)) res.push(v);
  });
  return res;
}

intersection.chineseName = '数组交集';

intersection.example = `
示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。`;
