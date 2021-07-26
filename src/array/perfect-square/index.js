/**
 * @param {number} num
 * @return {boolean}
 */
export default function perfectSquare(num) {
  let l = 0;
  let r = num;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (mid ** 2 > num) {
      r = mid - 1;
    } else if (mid ** 2 < num) {
      l = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}

perfectSquare.chineseName = '完全平方';

perfectSquare.example = `给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如  sqrt 。

 

示例 1：

输入：num = 16
输出：true
示例 2：

输入：num = 14
输出：false
 

提示：

1 <= num <= 2^31 - 1`;
