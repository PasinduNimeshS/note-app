import mongoose from "mongoose";

const noteScheme =new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
    },
    {timestamps:true} //CreatedAt,UpdatedAt
);

const Note =mongoose.model("Note", noteScheme)
export default Note

