async function deepCopyObject(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null) {
      reject(new Error("Input is not an object."));
    } else {
      try {
        const deepCopy = JSON.parse(JSON.stringify(obj));
        resolve(deepCopy);
      } catch (error) {
        reject(error);
      }
    }
  });
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

deepCopyObject(obj)
  .then((deepCopiedObj) => {
    console.log("Deep copied object:", deepCopiedObj);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
