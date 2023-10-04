const mongoose = require('mongoose')
require("dotenv").config();
const ExchangeSchema=mongoose.Schema({
    memberId:String,
    exchangeId: Number,
    sequenceId: Number,
    timestamp: Number,
})

const ApplicationSchema=mongoose.Schema({
    applicationId:Number
})

const MetricSchema=mongoose.Schema({
    metric:Object
})
const Exchange=mongoose.model(`${process.env.COLL_NAME1}`,ExchangeSchema)
const Application=mongoose.model(`${process.env.COLL_NAME2}`,ApplicationSchema)
const Metric=mongoose.model(`${process.env.COLL_NAME3}`,MetricSchema)


module.exports={Exchange,Application,Metric};
