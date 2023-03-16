const mongoose =require('mongoose')

const bugSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    },
    project:{
        type:String,
        required:true
    },
    reporter:{
        type:String,
        required:true
    },
    file_url:{
        type:String,
        required:true
    }
})

const Schema =mongoose.model("Bug",bugSchema)
module.exports= Schema