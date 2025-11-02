import Note from "../models/notesModel.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        if (notes.length === 0) {
            return res.send({status: false, message: "No notes added yet"})
        }
        return res.send({status: false, data: notes})
    } catch (error) {
        console.log("====> Something went wrong: ", error)
    }
}