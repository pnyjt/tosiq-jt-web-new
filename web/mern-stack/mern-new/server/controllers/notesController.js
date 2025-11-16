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

export const deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Note.findByIdAndDelete({_id: id});
        if (result) {
            return res.send({status: true, message: "Data has been deleted"})
        } else {
            return res.send({status: false, message: "Failed to delete!"})
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}

export const detailNote = async (req, res) => {
    const id = req.params.id;
    try {
        const note = await Note.findById({_id: id});
        if (note) {
            return res.send({status: true, note}) 
        } else {
            return res.send({status: false, message: "Note not found"})
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}

export const updateNote = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const result = await Note.findByIdAndUpdate({_id: id}, data);
        if (result) {
            return res.send({status: true, message: "Note updated successfully"});
        } else {
            return res.send({status: false, message: "Failed to update note"});
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}