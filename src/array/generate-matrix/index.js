import spiraln from '../../assets/images/spiraln.jpg';

export default function generateMatrix(n) {
  const array = Array.from({ length: n }).map(() => new Array(n));
  // 定义边界
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  // 定义指针
  let v = 0;
  let h = 0;
  // 定义方向
  let hd = 1;
  let vd = 1;
  // 开始循环
  let m = 1;
  while (m <= n ** 2) {
    while (h <= right && h >= left) { // 优先横向填充数组
      if (!array[v]) array[v] = [];
      array[v][h] = m;
      m += 1;
      h += hd;
    }
    h -= hd;
    //  在达到边界时反向,并且修改已经填充边界
    if (hd === 1) {
      top += 1;
      hd = -1;
    } else {
      bottom -= 1;
      hd = 1;
    }
    v += vd;
    while (v <= bottom && v >= top) {
      if (!array[v]) array[v] = [];
      array[v][h] = m;
      m += 1;
      v += vd;
    }
    v -= vd;
    if (vd === 1) {
      right -= 1;
      vd = -1;
    } else {
      left += 1;
      vd = 1;
    }
    h += hd;
  }
  return array;
}

// const maxNum = n * n;
// let curNum = 1;
// const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
// let row = 0, column = 0;
// const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右下左上
// let directionIndex = 0;
// while (curNum <= maxNum) {
//     matrix[row][column] = curNum;
//     curNum++;
//     const nextRow = row + directions[directionIndex][0]
//     const nextColumn = column + directions[directionIndex][1];
//     if (nextRow < 0 || nextRow >= n
//        || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
//         directionIndex = (directionIndex + 1) % 4; // 顺时针旋转至下一个方向
//     }
//     row = row + directions[directionIndex][0];
//     column = column + directions[directionIndex][1];
// }
// return matrix;

generateMatrix.chineseName = '螺旋矩阵';

generateMatrix.example = `
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 

示例 1：
<img src="${spiraln}" alt="spiraln">


输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
示例 2：

输入：n = 1
输出：[[1]]
 

提示：

1 <= n <= 20
`;
