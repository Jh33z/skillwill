//1) finding lowest age
const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
function lowestAge(users) {
  let lowest = users[0];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age < lowest.age) {
      {
        lowest = users[i];
      }
    }
  }
  return lowest.name;
}
console.log(lowestAge(users));

//2) re-creating users array

function userFunc(users) {
  const newArr = users.map(function (user) {
    return user;
  });
  return newArr;
}

console.log(userFunc(users));

//3)rolling a dice
function roll(a, b) {
  let rollsA = 0;
  let rollsB = 0;

  while (true) {
    rollsA++;
    randomNum1 = Math.trunc(Math.random() * 6) + 1;
    if (randomNum1 === 3) {
      return `${a} rolled 3 and won ${rollsA} attempts`;
    }
    rollsB++;
    randomNum2 = Math.trunc(Math.random() * 6) + 1;
    if (randomNum2 === 3) {
      return `${b} rolled 3 and won ${rollsA} attempts`;
    }
  }
}

console.log(roll("gio", "temo"));
