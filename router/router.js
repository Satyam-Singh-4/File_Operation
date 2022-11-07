const router=require('express').Router()
const controller=require('../controller/fileController')

router.post('/create',controller.createFile)
router.post('/read',controller.readFile1)

module.exports=router