let validator = require("validator");

const result1 = validator.isEmail("test@test.com");
const result2 = validator.isEmail(" abcDE123");
console.log(result1, result2);
