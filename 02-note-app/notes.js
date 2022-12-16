const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your Notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((x) => x.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("Note Added!!"));
  } else {
    console.log(chalk.red("Note Title Taken!!"));
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const datajson = dataBuffer.toString();
    return JSON.parse(datajson);
  } catch (e) {
    return [];
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();
  const keptNotes = notes.filter((x) => x.title !== title);
  if (notes.length > keptNotes.length) {
    saveNotes(keptNotes);
    console.log(chalk.red("Notes Removed!"));
  } else {
    console.log(chalk.yellow("No notes to remove with title - " + title));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue("List of all Notes:-"));
  notes.forEach((element) => {
    console.log(
      chalk.bold("\nTitle: ") +
        element.title +
        "    " +
        chalk.bold("Body: ") +
        element.body
    );
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((x) => x.title === title);
  if (note) {
    console.log(
      chalk.bold("Title: ") +
        note.title +
        "\n" +
        chalk.bold("Body: ") +
        note.body
    );
  } else {
    console.log(chalk.red("No note available with title:- " + title));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote,
};
