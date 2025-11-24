import Note from "../models/Note.js";

export async function getNotes(req, res) {
  const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(notes);
}

export async function createNote(req, res) {
  const { title, content } = req.body;

  if (!title) return res.status(400).json({ message: "Title is required" });

  const note = await Note.create({
    user: req.user._id,
    title,
    content,
  });

  res.status(201).json(note);
}

export async function updateNote(req, res) {
  const note = await Note.findOne({ _id: req.params.id, user: req.user._id });

  if (!note) return res.status(404).json({ message: "Note not found" });

  if (req.body.title !== undefined) note.title = req.body.title;
  if (req.body.content !== undefined) note.content = req.body.content;

  await note.save();

  res.json(note);
}

export async function deleteNote(req, res) {
  const note = await Note.findOne({ _id: req.params.id, user: req.user._id });

  if (!note) return res.status(404).json({ message: "Note not found" });

  await note.deleteOne();
  res.json({ message: "Note deleted" });
}
