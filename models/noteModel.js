const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    userId: { type: String },
  },
  { timestamps: true }
);

const NotesModel = mongoose.model("note", NotesSchema);

module.exports = { NotesModel };
