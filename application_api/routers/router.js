const controller=require('../controllers/function')
const express = require('express')
const router=express.Router()
router.get('/store_exchange_details',controller.ExchangeDetails)
router.get('/store_application_details',controller.ApplicationDetails)
router.get('/store_metrics_details',controller.MetricDetails)
module.exports=router;