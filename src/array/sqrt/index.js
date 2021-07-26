/**
 * @param {number} x
 * @return {number}
 */
export default function sqrt(x) {
  let l = 0;
  let r = x;
  let mid;
  while (l <= r) {
    mid = (l + r) >> 1;
    if (mid ** 2 > x) {
      mid -= 1;
      r = mid;
    } else if (mid ** 2 < x) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return mid;
}

sqrt.chineseName = '平方根';

sqrt.example = `实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。`;
