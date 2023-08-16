// closures

function counterFn() {
  let count = 0; // stays in closure scope

  return {
    increment10: () => (count = count + 10),
    increment1: () => (count = count + 1),
    getValue: () => count,
  };
}

const counter = counterFn();

counter.increment10();
counter.increment1();
counter.increment1();
counter.increment1();
counter.increment1();
console.log(counter.getValue());
