const controller=require('../controllers/machines_functionality')
const express=require("express");
const router=express.Router();

router.post('/register',controller.Register)
router.get('/getAllMachines',controller.getAllMachines)
router.get('/getSingleMachine/:name',controller.getSingleMachine)
router.get('/getInstanceDetail/:name',controller.getInstanceDetail)
router.post('/updateMachine/:name',controller.updateMachine)



module.exports = router;