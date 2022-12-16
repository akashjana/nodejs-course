// const fs = require('fs');
// fs.writeFileSync('notes.txt','This file is created by node js!');
// fs.appendFileSync('notes.txt','\nThis is appended text.');

// const funcAdd = require('./utils.js');
// console.log(funcAdd(5,9));

const notes = require("./notes.js");
const validator = require("validator");
// console.log(validator.isEmail("akashemail.com"));
// console.log(validator.isURL("https://akashemail.com"));
// console.log(notes());

const chalk = require("chalk");
// console.log(chalk.bgGreen("Success!"));
// console.log(chalk.red("Success!"));
// console.log(chalk.bgWhite("Success!"));

const yargs = require("yargs");
// const command = process.argv[2];
// console.log(process.argv);
// console.log(yargs.argv);
//Add note-----
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
    // console.log(
    //   chalk.green(
    //     "Adding note.........." +
    //       "\nTitle-" +
    //       argv.title +
    //       "\nBody-" +
    //       argv.body
    //   )
    // );
  },
}).argv;
//Remove note-----
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
    // console.log(chalk.red("Removing note.........."));
  },
}).argv;
//List notes-----
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    notes.listNotes();
    // console.log(chalk.yellow("Listing notes.........."));
  },
}).argv;
//Read note-----
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
    // console.log(chalk.blue("Reading note.........."));
  },
}).argv;
yargs.parse();
// if (command === "add") {
//   console.log(chalk.bgBlue("Adding note...."));
// } else if (command === "remove") {
//   console.log(chalk.bgRed("Removing note...."));
// }
