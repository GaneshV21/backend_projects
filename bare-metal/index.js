const express = require('express')
const routes= require('./routes/routes')
const app = express();
const bodyParser=require('body-parser')
const mongoose= require('mongoose')
const axios=require('axios')
require("dotenv").config(); 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(`${process.env.DB_NAME}`,{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection;
db.on('open',()=>{
    console.log("mongoose connected")
})

app.use('/',routes)
app.listen(8000,()=>{
    console.log("listening on")
})
