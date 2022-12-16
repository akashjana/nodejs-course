const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require("../src/math");

// test('Hello World!',()=>{

// })
// test('This should fail!',()=>{
//     throw new Error();
// })

test("Should calculate total with tip.", () => {
  const total = calculateTip(10, 0.3);
  //   if (total !== 13) {
  //     throw new Error("Total tip should be 13. Got " + total);
  //   }
  expect(total).toBe(13);
});
test("Should calculate total with tip when tip % not provided.", () => {
  const total = calculateTip(10);
  expect(total).toBe(12);
});
test("Should convert 32F to 0C", () => {
  const celcius = fahrenheitToCelsius(32);
  expect(celcius).toBe(0);
});
test("Should convert 0C to 32F", () => {
  const celcius = celsiusToFahrenheit(0);
  expect(celcius).toBe(32);
});
// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });
test("Should ass two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});
test("Should ass two numbers async", async () => {
  const sum = await add(10, 10);
  expect(sum).toBe(20);
});
