const router = require("express").Router();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});
//posting new notes on the title and text bodies
router.post("/notes", (req, res) => {
  let db = fs.readFileSync("./db/db.json");
  db = JSON.parse(db);

  let newNotes = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  // pushing created notes to db.json file
  db.push(newNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});
  // extra delete note function
router.delete("/notes/:id", (req, res) => {
  let db = JSON.parse(fs.readFileSync("./db/db.json"));
  let deleteNotes = db.filter((item) => item.id !== req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(deleteNotes));
  res.json(deleteNotes);
});

module.exports = router;
