import Note from "../models/notesModel.js"

export const getAllNotes = async (req, res) => {
    const notes = await Note.find({})
    return res.send({status: true, notes})
}

export const createNotes = async (req, res) => {
    const notes = req.body;
    // console.log(notes.title)
    if (!notes.title || !notes.description) {
        return res.send({status: false, message: "Form fields are required"});
    }

    try {
        const ok = await Note.create(notes);
        if (ok) {
            return res.send({status: true, message: "Data inserted successfully"})
        } else {
            return res.send({status: false, message: "Data isn't inserted"})
        }
    } catch (error) {
        console.log(`Someting went wrong: \n ${error}`)
    }
}