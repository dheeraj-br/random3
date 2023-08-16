// sort array of number

let arr = [1, 1, 1, 1, 111, 541, 4, 5, 587, 45];

// console.log(
//   [...arr].sort((perv, curr) => {
//     return perv - curr;
//   }),
//   arr
// );

// sort array of obj by user

const user = [
  { id: 234, user: '1name a', isActive: true, age: 200 },
  { id: 246, user: '2name b', isActive: false, age: 0 },
  { id: 34, user: '3name c', isActive: true, age: 50 },
  { id: 34, user: '4name d', isActive: true, age: 50 },
];

let sortedUser = [...user].sort((perv, curr) => {
  return perv.user.split(' ')[1] > curr.user.split(' ')[1] ? -1 : 1;
});

console.log(user, sortedUser);
