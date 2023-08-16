// check if array obj exists by key value

let user = [
  { id: 234, user: 'name1', isActive: true, age: 200 },
  { id: 246, user: 'name2', isActive: false, age: 0 },
  { id: 34, user: 'name3', isActive: true, age: 50 },
];

// console.log(!!user.find((obj) => obj.user === 'name1'));

// remove duplicates
let arr = [1, 2, 3, 4, 5, 5, 5, 5, 1, 1, 1];

let uniqueElem = [...new Set(arr)];
// console.log(uniqueElem);

uniqueElem = arr.reduce((aggregator, elem) => {
  console.log(aggregator, elem);
  return aggregator.includes(elem) ? aggregator : [...aggregator, elem]; // better than push because push returns index
  //return value becomes value for aggregator for next iter
}, []); // initializer for aggregator, if absent takes first elem of array

console.log(uniqueElem);
