// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Things went wrong!");
//     //resolve([1, 2, 3, 4]);
//   }, 2000);
// });
// doWorkPromise
//   .then((result) => {
//     console.log("Success!", result);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};
add(1, 2)
  .then((sum) => {
    console.log(sum);
  })
  .catch((error) => {
    console.log(error);
  });

add(1, 2)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((error) => {
    console.log(error);
  });
