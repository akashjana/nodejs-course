require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("637efc7b6838506cf4e84d41")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  const _ = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};
deleteTaskAndCount("637de914c419206bcc948754")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
