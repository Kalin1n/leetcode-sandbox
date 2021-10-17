const pascals = (deep) => {
  deep += 1;
  if (deep === 0) return [];
  if (deep === 1) return [[1]];

  let result = [];

  //row
  for (let i = 0; i < deep + 1; i++) {
    let arr = new Array();

    //col
    for (let col = 0; col < i; col++) {
      if (col === 0 || col === i - 1) {
        // по краям типо
        arr.push(1);
      } else {
        let value = result[i - 1][col - 1] + result[i - 1][col];
        arr.push(value);
      }
    }
    result.push(arr);
  }

  result.shift();
  console.log(result);
  return result[deep - 2];
};

console.log(pascals(0));
