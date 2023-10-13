const mongoose = require('mongoose');
require("dotenv").config();
const db1 = mongoose.createConnection(process.env.DB_NAME1, { useNewUrlParser: true, useUnifiedTopology: true });
const db2 = mongoose.createConnection(process.env.DB_NAME2, { useNewUrlParser: true, useUnifiedTopology: true });
const db1_application = db1;
const db2_lama = db2;

db1_application.on('open', () => {
    console.log('Connected to database 1');
});

db2_lama.on('open', () => {
    console.log('Connected to database 2');
});

const MetricSchema=mongoose.Schema({
    metric:Object
})

const LamaSchema=mongoose.Schema({
    lama:Array,
    error:String
})

const Metric=db1.model(`${process.env.COLL_NAME1}`,MetricSchema)
const Lama=db2.model(`${process.env.COLL_NAME2}`,LamaSchema)

module.exports={Metric,Lama};