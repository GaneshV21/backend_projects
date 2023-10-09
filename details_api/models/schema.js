const mongoose = require('mongoose');
require("dotenv").config();
const CpuSchema=mongoose.Schema({
    details: String,
    percent_used: Number
})

const CpuLoadSchema=mongoose.Schema({
    time: String,
    time_str:String,
    total1: String,
    total5: String,
    total: String,
    warn: String,
    crit: String,
    cpuArr:String
})

const RamSchema=mongoose.Schema({
    details: String,
    percent_used:Number,
    used: Number,
    used_unit: String,
    total: Number,
    total_unit: String,
    
})

const ThroughputDataSchema=mongoose.Schema({
    time: String,
    time_str:String,
    read_data: String,
    write_data: String,
})

const IoOperationsDataSchema=mongoose.Schema({
    time: String,
    time_str:String,
    read_data: String,
    write_data: String,
})

const DiskAverageWaitDataSchema=mongoose.Schema({
    time: String,
    time_str:String,
    read_data: String,
    write_data: String,
})

const NoOfThreadSchema=mongoose.Schema({
    time: String,
    time_str:String,
    thread_data: String,
})

const LamaAppFailureauthData=mongoose.Schema({
    time: String,
    time_str:String,
    timekey: Number,
    count: Number,
})

const LamaAppLatencyData=mongoose.Schema({
    time: String,
    time_str:String,
    timekey: Number,
    max: Number,
    min: Number,
    avg: Number,
    med: Number
})

const LamaAppThroughputData=mongoose.Schema({
    time: String,
    time_str:String,
    timekey: Number,
    max: Number,
    min: Number,
    avg: Number,
    med: Number
})

const TcpConnectionData=mongoose.Schema({
    time: String,
    time_str:String,
    established:String,
    time_wait: String,
    listen: String,
})

const UpTimeData=mongoose.Schema({
    last_time: String,
    details:String,
})

const HhdData=mongoose.Schema({
    hhd:Array
})

const InterfaceData=mongoose.Schema({
    interface:Array
})

const DetailsData=mongoose.Schema({
    livestateId: String,
    host: String,
    ip: String,
    userId: String,
    ctime: String,
    createdAt: String,
    updatedAt: String,
})



const Cpu=mongoose.model(`${process.env.COLL_NAME1}`,CpuSchema)
const CpuLoad=mongoose.model(`${process.env.COLL_NAME2}`,CpuLoadSchema)
const Ram=mongoose.model(`${process.env.COLL_NAME3}`,RamSchema)
const ThroughputData=mongoose.model(`${process.env.COLL_NAME4}`,ThroughputDataSchema)
const IoOperationsData=mongoose.model(`${process.env.COLL_NAME5}`,IoOperationsDataSchema)
const DiskAverageWaitData=mongoose.model(`${process.env.COLL_NAME6}`,DiskAverageWaitDataSchema)
const NoOfThread=mongoose.model(`${process.env.COLL_NAME7}`,NoOfThreadSchema)
const LamaAppFailureauth=mongoose.model(`${process.env.COLL_NAME8}`,LamaAppFailureauthData)
const LamaAppLatency=mongoose.model(`${process.env.COLL_NAME9}`,LamaAppLatencyData)
const LamaAppThroughput=mongoose.model(`${process.env.COLL_NAME10}`,LamaAppThroughputData)
const TcpConnection=mongoose.model(`${process.env.COLL_NAME11}`,TcpConnectionData)
const UpTime=mongoose.model(`${process.env.COLL_NAME12}`,UpTimeData)
const Hhd=mongoose.model(`${process.env.COLL_NAME13}`,HhdData)
const Interface=mongoose.model(`${process.env.COLL_NAME14}`,InterfaceData)
const Details=mongoose.model(`${process.env.COLL_NAME15}`,DetailsData)






module.exports = {Cpu,CpuLoad,Ram,ThroughputData,IoOperationsData,DiskAverageWaitData,NoOfThread,LamaAppFailureauth,LamaAppLatency,LamaAppThroughput,TcpConnection,UpTime,Hhd,Interface,Details};