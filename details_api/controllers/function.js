const {Cpu,CpuLoad,Ram,ThroughputData,IoOperationsData,DiskAverageWaitData,NoOfThread,LamaAppFailureauth,LamaAppLatency,LamaAppThroughput,TcpConnection,UpTime,Hhd,Interface,Details}=require('../models/schema')
const utils=require('../utils/util')
exports.cpu=async(req,res)=>{
   const response= await utils.sendRequest('details')
   if (response?.error) {
    console.log("ERROR:", response)
    return;
    }
    Cpu.create(response.data.data.cpu)
    res.send("cpu inserted")
}

exports.cpu_load=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     CpuLoad.create(response.data.data.cpu_load)
     res.send("cpu load inserted")
 }

 exports.ram=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     Ram.create(response.data.data.ram)
     res.send("ram inserted")
 }

 exports.throughput_data=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     ThroughputData.create(response.data.data.disk_io_summary.throughput_data)
     res.send("throughput data inserted")
 }


 exports.io_operations_data=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     IoOperationsData.create(response.data.data.disk_io_summary.io_operations_data)
     res.send("iooperations data inserted")
 }

 exports.disk_average_wait_data=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     DiskAverageWaitData.create(response.data.data.disk_io_summary.disk_average_wait_data)
     res.send("diskaveragewait data inserted")
 }


 exports.no_of_thread=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     NoOfThread.create(response.data.data.no_of_thread)
     res.send("thread data inserted")
 }

 exports.lama_app_failureauth=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     LamaAppFailureauth.create(response.data.data.lama_app_failureauth)
     res.send("lama appfailure data inserted")
 }

 exports.lama_app_latency=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     LamaAppLatency.create(response.data.data.lama_app_latency)
     res.send("lama applatency data inserted")
 }


 exports.lama_app_throughput=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     LamaAppThroughput.create(response.data.data.lama_app_throughput)
     res.send("lama appthroughput data inserted")
 }


 exports.tcp_connection=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     TcpConnection.create(response.data.data.tcp_connection)
     res.send("tcp connection data inserted")
 }

 exports.up_time=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     UpTime.create(response.data.data.up_time)
     res.send("uptime data inserted")
 }


 exports.hhd=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     Hhd.create({hhd: response.data.data.hhd})
     res.send("hhd data inserted")
 }


 exports.interface=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     Interface.create({interface: response.data.data.interface})
     res.send("interface data inserted")
 }

 exports.details=async(req,res)=>{
    const response= await utils.sendRequest('details')
    if (response?.error) {
     console.log("ERROR:", response)
     return;
     }
     Details.create({livestateId:response.data.data.livestateId,
        host:response.data.data.host,
        ip:response.data.data.ip,
        userId:response.data.data.userId,
        ctime:response.data.data.ctime,
        createdAt:response.data.data.createdAt,
        updatedAt:response.data.data.updatedAt
     })
     res.send("details data inserted")
 }
