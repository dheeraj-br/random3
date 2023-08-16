// pure function and array mutate

let names = ['name1', 'name2', 'name3', 'name4'];

function appendToArr(names, elem) {
  return [...names, elem]; // do not mutate arrays and obj, use spread
}
console.log(names, appendToArr(names, 'name5'));
