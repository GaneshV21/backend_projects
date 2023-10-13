const utils=require('../utils/utils')

exports.login=async(req,res)=>{
    const response=await utils.sendRequest('auth/login') 
    res.send(response) 
}

exports.store=async(req,res)=>{
    const response=await utils.storeRequest('metrics/application')
    res.send(response)

}