const {Exchange,Application,Metric}=require('../models/schema')
const utils= require('../utils/utils')

exports.ExchangeDetails=async(req,res)=>{
    const response=await utils.sendRequest('application') 
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    const data=await Exchange.find({exchangeId:response.data.data.exchangeId})
    if(data.length===0){
        Exchange.create({memberId:response.data.data.memberId,exchangeId:response.data.data.exchangeId,
            sequenceId:response.data.data.sequenceId,timestamp:response.data.data.timestamp})
        res.send("Exchange inserted")
    }
    else{
        res.send("already found")
    }
    
}

exports.ApplicationDetails=async(req,res)=>{
    const response=await utils.sendRequest('application')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    
    for(let i=0;i<response.data.data.payload.length;i++) {
        const data=await Application.find({applicationId:response.data.data.payload[i].applicationId})
        if(data.length===0){
            Application.create({applicationId:response.data.data.payload[i].applicationId})
        }
        else{
            console.log("Already found")
        }
    }
    res.send("Application inserted")
}

exports.MetricDetails=async(req,res)=>{
    const response=await utils.sendRequest('application')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    for(let i=0;i<response.data.data.payload.length;i++) {
        for(let j=0;j<response.data.data.payload[i].metricData.length;j++){
            let obj={key:response.data.data.payload[i].metricData[j].key,value:response.data.data.payload[i].metricData[j].value}
        Metric.create({metric:obj})
        }
    }
    res.send("Metrics inserted")
}
