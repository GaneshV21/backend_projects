const controller=require('../controllers/function')
const express=require('express')
const router=express.Router()
router.get('/store-user',controller.storeUser)
router.get('/store-comment',controller.storeComment)
module.exports=router