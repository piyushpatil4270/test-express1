const express=require("express")
const router=express.Router()
const path=require("path")

router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","AddProduct.html"))
})



router.post("/add-product",(req,res,next)=>{
    const name=req.body.name
    const size=req.body.size
    console.log(name)
    console.log(size)
})


module.exports=router