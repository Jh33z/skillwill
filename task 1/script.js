//1) returning text
function someFunc(a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}
console.log(someFunc(5, 2));

//2) converting F to C
function calcCelsius(f) {
  let c;
  if (typeof f === "number") {
    c = ((f - 32) * 5) / 9;
  } else {
    return false;
  }
  return c;
}

console.log(calcCelsius(40));

//3) operations
function randomFunc(a, b, operation) {
  if (typeof a === "number" && typeof b === "number") {
    if (operation === "+") {
      return a + b;
    } else if (operation === "-") {
      return a - b;
    } else if (operation === "*") {
      return a * b;
    } else if (operation === "/") {
      return a / b;
    } else {
      return false;
    }
  } else return false;
}

console.log(randomFunc(5, 5, "+"));
