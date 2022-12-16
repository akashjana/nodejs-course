const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers musb be >0");
      }
      resolve(a + b);
    }, 2000);
  });
};
const doWork = async () => {
  const sum = await add(1, 33);
  const sum2 = await add(sum, 6);
  return sum2;
};
doWork()
  .then((result) => {
    console.log("Result ", result);
  })
  .catch((error) => {
    console.log("Error ", error);
  });
