const express=require("express")
const router=express.Router()
const shopController=require("../controllers/shop")

router.use("/",shopController.welCome)

module.exports=router