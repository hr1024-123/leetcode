export function generateNums(l, range = [0, 10]) {
  const arr = new Array(l);
  for (let i = 0; i < l; i += 1) {
    const [min, max] = range;
    arr[i] = min + ~~(Math.random() * max);
  }
}

export default {
  generateNums,
};
