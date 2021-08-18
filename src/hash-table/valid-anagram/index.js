export default function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  const resSet = new Array(26).fill(0);
  const base = 'a'.charCodeAt();
  for (let i = 0; i < s.length; i += 1) {
    resSet[i.charCodeAt() - base] += 1;
  }
  for (let i = 0; i < t.length; i += 1) {
    if (!resSet[i.charCodeAt() - base]) return false;
    resSet[i.charCodeAt() - base] -= 1;
  }
  return true;
}

validAnagram.chineseName = '字母异位';

validAnagram.example = `给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

 

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
 

提示:

1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母
 

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？`;
