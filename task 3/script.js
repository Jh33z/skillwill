// TASK 3

//subtask 1

function sumFunc(first, second, ...others) {
  firstNums = 0;
  restNums = 1;

  firstNums += first + second;
  for (let other of others) {
    restNums *= other;
  }
  return [firstNums, restNums];
}

console.log(sumFunc(5, 7, 2, 6, 3, 7, 8, 2));

//subtask 2
users = {
  banks: [
    { address: { city: "Tbilisi" } },
    { address: { city: "Batumi" } },
    { address: { city: "Ozurgeti" } },
  ],
};

function getCity({
  banks: [
    ,
    ,
    {
      address: { city },
    },
  ],
}) {
  return city;
}
console.log(getCity(users));

//subtask 3

let singleUser1 = {
  name: "gio",
  lastname: "kalandadze",

  address: {
    country: "Georgia",
    street: "qavtaradzis 8",
  },

  skills: ["JS", "HTML"],
};
let singleUser2 = {
  name: "temo",
  lastname: "vasadze",

  address: {
    country: "Germany",
    street: "petridzis 1",
  },
  age: {
    born: 1999,
    birtday: "20 march",
  },

  skills: ["JS", "HTML"],
};

function reCreateObj(obj) {
  if (typeof obj != "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(reCreateObj);
  }
  let newObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] = reCreateObj(obj[key]);
    }
  }
  return { ...newObject };
}

console.log(reCreateObj(singleUser1));
console.log(reCreateObj(singleUser2));
