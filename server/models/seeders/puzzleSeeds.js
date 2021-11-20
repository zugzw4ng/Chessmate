const db = require("../../config/connection");
const Puzzle = require("../puzzle-model");
const puzzleSeeds = require('./puzzlejson.json');

db.once("open", async () => {
  try {
    await Puzzle.deleteMany({});
    await Puzzle.insertMany(puzzleSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
