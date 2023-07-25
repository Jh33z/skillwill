//TASK 7
//then/catch
function makeToys(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("Undefected");
      } else {
        reject("Defected");
      }
    }, delay);
  });
}
function deliverToys(status, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "Undefected") {
        if (Math.random() > 0.1) {
          resolve("Your order has been delivered");
        } else {
          reject("Something went wrong on the road!");
        }
      }
    }, delay);
  });
}
function sellToy(status, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "Your order has been delivered") {
        if (Math.random() > 0.3) {
          resolve("Toy sold successfully");
        } else {
          reject("Customer Declined");
        }
      }
    }, delay);
  });
}
makeToys(3000)
  .then((res) => deliverToys(res, 2000))
  .then((res) => sellToy(res, 1000))
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

//async/await

function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function makeToys(delay) {
  await wait(delay);
  if (Math.random() > 0.1) {
    return "Undefected";
  } else {
    return "Defected";
  }
}

async function deliverToys(status, delay) {
  await wait(delay);
  if (status === "Undefected") {
    if (Math.random() > 0.1) {
      return "Your order has been delivered";
    } else {
      return "Something went wrong on the road!";
    }
  }
}

async function sellToy(status, delay) {
  await wait(delay);
  if (status === "Your order has been delivered") {
    if (Math.random() > 0.3) {
      return "Toy sold successfully";
    } else {
      return "Customer Declined";
    }
  }
}

async function res() {
  try {
    const makingState = await makeToys(2000);
    const deliveringState = await deliverToys(makingState, 1000);
    const sellingState = await sellToy(deliveringState, 1000);
    return sellingState;
  } catch (error) {
    return error.message;
  }
}

res().then((result) => console.log(result));
