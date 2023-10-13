const controller=require('../controllers/function')
const express = require('express')
const router=express.Router()

router.get('/login',controller.login)
router.get('/store',controller.store)


module.exports =router;