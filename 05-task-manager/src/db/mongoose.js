const mongoose = require("mongoose");
// const validator = require("validator");

mongoose
  .connect(
    "mongodb+srv://akash:akash123@cluster-node-demo.bxeatg4.mongodb.net/task-manager-api?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
  )
  .then(() => {
    console.log("Mongoose is connected.");
  })
  .catch((error) => {
    console.log("Error occured while connecting!", error);
  });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });
// const task = new Task({
//   description: "   Clean the room",
// });
// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log("Error while storing data!", error);
//   });

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid.");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error('Password cannot contains "password"');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age should be >0");
//       }
//     },
//   },
// });
// const me = new User({
//   name: "Stifler",
//   email: "Stifler@mail.com",
//   password:'Passwrd2wer    ',
//   age: 21,
// });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
