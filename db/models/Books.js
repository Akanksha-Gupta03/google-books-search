const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
        title:{
            type:String
        },
        author:{
            type:String
        },
        description:{
            type:String
        },
        previewLink:{
            type:String
        },
        imageLink:{
            type:String
        }
    });
    const Books = mongoose.model("Books", bookSchema);
    
    module.exports = Books;
