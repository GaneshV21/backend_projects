const API_URL = process.env.API_KEY
const { default: axios } = require('axios');
const {Metric,Lama}=require('../models/schema')
const generateURL = (path) => {
    return `${API_URL}/${path}`
}

const sendRequest = async (path) => {
    try {
        return await axios.post(generateURL(path),{
            "memberId":"06000",
            "loginId":"ApiUser06000",
            "password":"0CxUgThnqlK6gaKU2HnL2A=="
        })
    } catch (err) {
        return { token:"060000CxUgThnqlK6gaKU2HnL2A" }
    }

}

const storeRequest = async (path) => {
    const data=await Metric.find({},{_id:0})
    try {
        return await axios.post(generateURL(path),data)  
    } catch (err) {
        Lama.create({lama:data,error:err.message})
        return("data sending successfully")
    }

}

module.exports = {
    generateURL,
    sendRequest,
    storeRequest 
}