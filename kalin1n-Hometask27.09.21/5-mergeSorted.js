const mergeSorted = (num1, m, num2, n) => {
  const first = num1.slice(0, m);
  const second = num2.slice(0, n);
  let i = 0,
    j = 0,
    result = [];

  while (i < first.length && j < second.length) {
    if (num1[i] < num2[j]) {
      result.push(i);
      i++;
    } else {
      result.push(num2[j]);
      j++;
    }
  }

  if (i < first.length) first.slice(i).forEach((item) => result.push(item));
  if (j < second.length) second.slice(j).forEach((item) => result.push(item));
  num1.length = 0;
  result.forEach((n) => num1.push(n));
};
