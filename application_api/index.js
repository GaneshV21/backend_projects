const express = require('express')
const app= express()
const routes= require('./routers/router')
require("dotenv").config();
const mongoose= require('mongoose');
mongoose.connect(`${process.env.DB_NAME}`,{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection;
db.on('open',()=>{
    console.log("mongoose connected")
})

app.use('/',routes)
app.listen(8000,()=>{
    console.log("listening on")
})