import mongoose from "mongoose";
import { Note } from "../models/noteModel.js";

export const getNotes = async(_,res) => {
    
    try{
      const notes = await Note.find().sort({createdAt: -1})

      if(notes.length===0){
         return res.status(404).json({message: "Notes not found"});
      }

      return res.status(200).json(notes);
    }
    catch(error){
      console.log("Error in getNotes controller", error.message);
      return res.status(500).json({message: "Internal Server Error"});
    }
}



export const getNoteById = async (req,res) => {
     
    try{
         const { id } = req.params;

            if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(400).json({message: "Invalid Id format"});
        }

         const note = await Note.findById(id);

         if(!note){
            return res.status(404).json({message: "Note not Found"})
         }

         return res.status(200).json(note);
    }
    catch(error){
       console.log("Error in getNoteById controller", error.message);
       return res.status(500).json({message: "Internal Server Error"});
    }
}




export const createNote = async (req,res) => {

      try{

        const {title, content} = req.body;

        if(!title || !title.trim() || !content || !content.trim()){

            return res.status(400).json({message: "All fields are required"});
        }

        const note = new Note({
            title: title.trim(),
            content: content.trim(),
        })

        const savedNote = await note.save();

        return res.status(200).json(savedNote);

      }
      catch(error){
        console.log("Error in createNote controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
      }
}



export const updateNote = async (req,res) => {
     
      try{
        const { id } = req.params;

        const {title, content} = req.body;

        if(!title || !title.trim() || !content || !content.trim()) {
            return res.status(400).json({message: "All fields are required"});
        }

        if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(400).json({message: "Invalid Id format"});
        }
       
        const note = {
            title: title.trim(),
            content: content.trim(),
        }

        const updatedNote = await Note.findByIdAndUpdate(id, note, {new:true});

        if(!updatedNote){
            return res.status(404).json({message: "Note not found"});
        }

        return res.status(200).json(updatedNote);

      }
      catch(error){
         console.log("Error in updateNote controller", error.message);
         return res.status(500).json({message:"Internal Server Error"});
      }

}



export const deleteNote = async (req,res) => {
     
    try{
         const { id } = req.params;
         
        if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(400).json({message: "Invalid Id format"});
        }

        const deletedNote = await Note.findByIdAndDelete(id);

        if(!deletedNote){
            return res.status(404).json({message: "Note not found"})
        }

        return res.status(200).json({message: "Note deleted Successfully"});        
    }
    catch(error){
       console.log("Error in deleteNote controller", error.message);
       return res.status(500).json({message: "Internal Server Error"});
    }

}