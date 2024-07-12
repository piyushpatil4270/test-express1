const express=require("express")
const router=express.Router()
const path=require("path")
const ContactController=require("../controllers/contact")

router.post("/form",ContactController.Contact)
router.post("/success",ContactController.Success)


module.exports=router