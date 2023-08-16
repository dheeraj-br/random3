// currying

function multiply(a) {
  return (b) => {
    return a * b;
  };
}

console.log(multiply(2642)(2));
