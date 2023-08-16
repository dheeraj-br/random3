// print range

function range(start, end) {
  return [...Array(end - start + 1).keys()].map((el) => el + start);
}

// console.log(range(399, 410));

// random shuffle array
let arr = [365, 365, 76352, 543, 325465, 73624, 352];
function shuffle(arr) {
  let objs = arr
    .map((elem) => ({ rand: Math.random(), value: elem }))
    .sort((obj1, obj2) => obj1.rand - obj2.rand)
    .map((a) => a.value);
  return objs;
}

// console.log(shuffle(arr));

// occurrence of min value
const minVal = Math.min(...arr);
const minArr = arr.filter((elem) => elem === minVal);
console.log(minArr);
