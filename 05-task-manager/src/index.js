const app = require("./app");
// const express = require("express");
// require("./db/mongoose");
// const userRouter = require("./routers/user");
// const taskRouter = require("./routers/task");

// const app = express();
const port = process.env.PORT || 3000;

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.endsWith(".pdf")) {
//       return cb(new Error("Please upload pdf"));
//     }
//     cb(undefined, true);
//     // cb(new Error("File must be a PDF"));
//     // cb(undefined, true);
//     // cb(undefined, false);
//   },
// });
// // const errorMiddleware = (req, res, next) => {
// //   throw new Error("From my middleware");
// // };
// app.post(
//   "/upload",
//   upload.single('upload'),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// );

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled.");
//   } else {
//     next();
//   }
// });
// app.use((req, res, next) => {
//   res.status(503).send("Requests are blocked due to maintanance.");
// });

// app.use(express.json());

// app.use(userRouter);
// app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");
// const main = async () => {
//   // const task = await Task.findById('638438285d5f9f25bc5632ab');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);
//   const user = await User.findById("638436b599b1de9080c1d6af");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();

// const jwt = require("jsonwebtoken");
// const myFunction = async () => {
//   // const password = "Ajweu123du";
//   // const hashedPassword = await bcrypt.hash(password, 8);
//   // console.log(password);
//   // console.log(hashedPassword);
//   // const isMatch = await bcrypt.compare("Ajweu123du", hashedPassword);
//   // console.log(isMatch);
//   const token = jwt.sign({ _id: "1234eu" }, "this is unique key", {
//     expiresIn: "10 days",
//   });
//   console.log(token);
//   const data = jwt.verify(token, "this is unique key");
//   console.log(data);
// };
// myFunction();
