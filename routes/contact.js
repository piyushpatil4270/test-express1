const express=require("express")
const router=express.Router()
const path=require("path")

router.post("/form",(req,res,next)=>{
    console.log(path.join(__dirname,"..","views","Contact.html"))
    const filepath=path.join(__dirname,"..","views","Contact.html")
    res.sendFile(filepath)
   
})
router.post("/success",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","Success.html"))
})


module.exports=router