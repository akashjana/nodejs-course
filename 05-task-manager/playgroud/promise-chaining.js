require("../src/db/mongoose");
const User = require("../src/models/user");

// 637df500a0f6b46fc067b204

// User.findByIdAndUpdate("637eed098f638967a0441cb0", { age: 11 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 11 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};
updateAgeAndCount("637eed098f638967a0441cb0", 21)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
