const getSpiral = (arr) => {
  let k = 0,
    m = arr.length,
    l = 0,
    n = arr[0].length;

  let result = [];

  while (k < m && l < n) {
    for (let i = l; i < n; ++i) {
      result.push(arr[k][i]);
    }
    k++;

    for (let i = k; i < m; ++i) {
      result.push(arr[i][n - 1]);
    }
    n--;

    if (k < m) {
      for (i = n - 1; i >= l; --i) {
        result.push(arr[m - 1][i]);
      }
      m--;
    }
    if (l < n) {
      for (i = m - 1; i >= k; --i) {
        result.push(arr[i][l]);
      }
      l++;
    }
  }

  return result;
};

console.log(
  getSpiral([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
