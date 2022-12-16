// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL =
  "mongodb+srv://akash:akash123@cluster-node-demo.bxeatg4.mongodb.net/?retryWrites=true&w=majority";
const database = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("Connected to databse.");
    const db = client.db(database);

    // db.collection("users")
    //   .deleteMany({
    //     age: 29,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection("tasks")
    //   .deleteOne({
    //     description: "Wash clothes",
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("637ca22bdfc3125d68e21f10") },
    //     {
    //       $set: {
    //         name: "Mikel",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("637ca22bdfc3125d68e21f10") },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("637ca48e0e87cc157828ad9d") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("Unable to fetch data.");
    //     }
    //     console.log(task);
    //   }
    // );
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("Unable to fetch data.");
    //     }
    //     console.log(tasks);
    //   });
    // db.collection("users")
    //   .find({ age: 24 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("users").insertOne(
    //   {
    //     name: "Akash Jana",
    //     age: 24,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert data.");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 21,
    //     },
    //     {
    //       name: "John",
    //       age: 29,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert datas.");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Write a letter to HM",
    //       completed: false,
    //     },
    //     {
    //       description: "Wash clothes",
    //       completed: true,
    //     },
    //     {
    //       description: "Wifi bill payment",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert datas.");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
