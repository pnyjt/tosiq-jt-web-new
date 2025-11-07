import Note from "../models/notesModel.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        if (notes.length === 0) {
            return res.send({status: false, message: "No notes added yet"})
        }
        return res.send({status: true, notes})
    } catch (error) {
        console.log("====> Something went wrong: ", error)
    }
}

export const createNote = async (req, res) => {
    const note = req.body;
    if (!note.title || !note.description) return res.send({status: false, message: "Form fields are required"})
    try {
        const result = await Note.create(note)
        if (result) {
            return res.send({status: true, message: "Note has been created"})
        } else {
            return res.send({status: true, message: "Failed to create note"})
        }
    } catch (error) {
        console.log("====> Something went wrong: ", error)
    }
}