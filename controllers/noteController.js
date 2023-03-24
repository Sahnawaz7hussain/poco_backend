const { NotesModel } = require("../models/noteModel");

const getNotes = async (req, res) => {
  // console.log("user red: ", req.body);
  try {
    let notes = await NotesModel.find({ userId: req.body.userId });

    res.status(200).json({ notes });
  } catch (err) {
    res.status(401).json({
      message: "something went wrong pleae try again later",
      err: err.message,
    });
  }
};
const addNote = async (req, res) => {
  let userId = req.body.userId;
  //console.log("userId adddddd", userId);
  try {
    let data = req.body;
    data.userId = userId;
    let newNote = NotesModel(data);
    await newNote.save();
    res.status(200).json({ message: "new note created", note: req.body });
  } catch (err) {
    res.status(401).json({
      message: "something went wrong pleae try again later",
      err: err.message,
    });
  }
  //res.send("notes");
};
const updateNotes = async (req, res) => {
  let id = req.params.id;
  try {
    let newNote = await NotesModel.findByIdAndUpdate(id, req.body);

    res.status(200).json({ message: "note updated", note: newNote });
  } catch (err) {
    res.status(401).json({
      message: "something went wrong pleae try again later",
      err: err.message,
    });
  }
};
const deleteNotes = async (req, res) => {
  let id = req.params.id;
  try {
    let newNote = await NotesModel.findByIdAndDelete(id);
    res.status(200).json({ message: "note deleted" });
  } catch (err) {
    res.status(401).json({
      message: "something went wrong pleae try again later",
      err: err.message,
    });
  }
};

module.exports = { getNotes, addNote, updateNotes, deleteNotes };
