/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export default function backspaceCompare(s, t) {
  let sf = s.length - 1;
  let tf = t.length - 1;
  let so = 0;
  let to = 0;
  while (sf >= 0 || tf >= 0) {
    while (sf >= 0) {
      if (s[sf] === '#') {
        sf -= 1;
        so += 1;
      } else if (so > 0) {
        sf -= 1;
        so -= 1;
      } else {
        break;
      }
    }
    while (tf >= 0) {
      if (t[tf] === '#') {
        tf -= 1;
        to += 1;
      } else if (to > 0) {
        tf -= 1;
        to -= 1;
      } else {
        break;
      }
    }
    if (s[sf] === t[tf]) {
      sf -= 1;
      tf -= 1;
    } else {
      return false;
    }
  }
  return true;
}

backspaceCompare.chineseName = '比较退格';

backspaceCompare.example = `给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
 

提示：

1 <= S.length <= 200
1 <= T.length <= 200
S 和 T 只含有小写字母以及字符 '#'。`;
