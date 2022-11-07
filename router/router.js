const router=require('express').Router()
const controller=require('../controller/fileController')

router.post('/create',controller.createFile)

module.exports=router