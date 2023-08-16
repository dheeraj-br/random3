const user = [
  { id: 234, user: 'name1', isActive: true, age: 200 },
  { id: 246, user: 'name2', isActive: false, age: 0 },
  { id: 34, user: 'name3', isActive: true, age: 50 },
];

// let names = [];
// user.forEach((obj) => {
//   names.push(obj.name);
// });

// all names
let userNames = user.map((obj) => obj.user);

// active user names
let activeUsers = user.filter((obj) => obj.isActive).map((obj) => obj.user);

// active user names sorted by age
let activeUsersAsc = user
  .filter((obj) => obj.isActive)
  .sort((obj, obj1) => obj.age - obj1.age)
  .map((obj) => obj.user);

console.log(activeUsers, userNames, activeUsersAsc);

console.log(typeof null); // object
