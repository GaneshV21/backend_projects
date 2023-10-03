const Machine=require('../models/schema')
exports.Register=(req,res)=>{
    let name=req.body.name
    let processor=req.body.processor
    let obj={"ram":req.body.ram_size,"cpu":req.body.cpu_size,"disk":req.body.disk_size}
    let obj1={"ram":req.body.ram_unit,"cpu":req.body.cpu_unit,"disk":req.body.disk_unit}
    Machine.create({size:obj,unit:obj1,name:name,processor:processor}).then((data)=>{
        res.send(data)
    })
}

exports.getAllMachines=(req,res)=>{
    Machine.find({}).then((data)=>{
        res.send(data)
    })
}

exports.getSingleMachine=(req,res)=>{
    let name=req.params.name
    Machine.find({name}).then((data)=>{
        res.send(data)
    })
}

exports.getInstanceDetail=(req,res)=>{
    let name=req.params.name
    Machine.find({name},{_id:0,name:1,size:1,unit:1}).then((data)=>{
        res.send(data)
    })
}

exports.updateMachine=(req,res)=>{
    let name=req.params.name;
    let processor=req.body.processor
    let obj={"ram":req.body.ram_size,"cpu":req.body.cpu_size,"disk":req.body.disk_size}
    let obj1={"ram":req.body.ram_unit,"cpu":req.body.cpu_unit,"disk":req.body.disk_unit}
    Machine.updateOne({name:name},{$set:{size:obj,unit:obj1,processor}}).then((data)=>{
        res.send("updated")
    })
    
}



