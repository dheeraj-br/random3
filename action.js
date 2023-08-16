// concatenate arrays

function concatArr(arr1, arr2, arr3) {
  // return arr1.concat(arr2, arr3);
  return [...arr1, ...arr2, ...arr3];
}

console.log(concatArr([132, 123, 1, 123], [13, 8756, 2, 521, 212], [234354]));
