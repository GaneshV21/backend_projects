const mongoose=require('mongoose');
require("dotenv").config();
// const MachineSchema= mongoose.Schema({
//     ram_size:Number,
//     ram_unit:String,
//     cpu_size:Number,
//     cpu_unit:String,
//     disk_size:Number,
//     disk_unit:String,
//     name:String,
//     processor:String
// })


const MachineSchema= mongoose.Schema({ 
    size:{ram:Number,cpu:Number,disk:Number},
    unit:{ram:String,cpu:String,disk:String},
    name:String,
    processor:String
})


const Machine=mongoose.model(`${process.env.COLL_NAME}`,MachineSchema);
module.exports=Machine;