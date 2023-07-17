//TASK 4

//subtask 1
function replaceString(str, valueToReplace, valueToReplaceWith) {
  let result = "";
  let valueToReplaceLength = valueToReplace.length;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === valueToReplace[0]) {
      let match = true;

      for (let j = 0; j < valueToReplaceLength; j++) {
        if (str[i + j] !== valueToReplace[j]) {
          match = false;
          break;
        }
      }

      if (match) {
        result += valueToReplaceWith;
        i += valueToReplaceLength - 1;
      } else {
        result += str[i];
      }
    } else {
      result += str[i];
    }
  }

  return result;
}

let inputString = "Hello, world!";
let replacedString = replaceString(inputString, "world", "universe");
console.log(replacedString); // Output: Hello, universe!

//subtask 2
const strToUpper = (value) => {
  result = [];

  const splitStr = value.split(" ");
  const strCap = [];
  for (let str of splitStr) {
    const upper = str.toUpperCase();
    strCap.push(upper);
  }
  result.push(strCap.join(" "));
  return result;
};

console.log(strToUpper("hello my name is giorgi"));

//subtask 3

const usersObject = [
  {
    name: "Lasha",
    age: 30,
  },
  {
    name: "Saba",
    age: 20,
  },
  {
    name: "Gio",
    age: 10,
  },
];

function decentOrder(user) {
  return user.sort((a, b) => {
    return a.age - b.age;
  });
}
console.log(decentOrder(usersObject));
