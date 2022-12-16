// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     return callback(num1 + num2);
//   }, 2000);
// };
// add(8, 2, (sum) => console.log(sum));

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error", undefined);
    callback(undefined, [1, 2, 3, 4]);
  }, 2000);
};
doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
