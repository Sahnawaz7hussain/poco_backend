const express = require("express");
const {
  getNotes,
  addNote,
  updateNotes,
  deleteNotes,
} = require("../controllers/noteController");
notesRouter = express.Router();

notesRouter.post("/", addNote);
notesRouter.get("/", getNotes);
notesRouter.put("/:id", updateNotes);
notesRouter.delete("/:id", deleteNotes);

module.exports = { notesRouter };
