const mongoose = require('mongoose')
require("dotenv").config();
const UserSchema= mongoose.Schema({ 
    userId:Number,
    username:String
})

const CommentSchema= mongoose.Schema({ 
    commentId:Number,
    body:String,
    postId:Number,
    user:{
        userId:Number,
        username:String
    }
})


const User=mongoose.model(`${process.env.COLL_NAME1}`,UserSchema);
const Comment=mongoose.model(`${process.env.COLL_NAME2}`,CommentSchema);

module.exports={User,Comment};