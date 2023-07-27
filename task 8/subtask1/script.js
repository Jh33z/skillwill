//TASK 8
//Subtask 1

function expo(num, pow, cb) {
  if (pow === 1) return num;
  return cb(num, expo(num, pow - 1, cb));
}

const b = expo(5, 3, (num, prevResult) => {
  return num * prevResult;
});

console.log(b); // Output: 625 (5 * 5 * 5 * 5)
