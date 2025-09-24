import mongoose from 'mongoose';
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["student","educator"],
        required:true
    },
    photoUrl:{
        type:String,
        default:""
    },
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"

        }
    ]

},{timestamps:true})

export const User=mongoose.model("User",userSchema);

