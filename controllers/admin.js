const path=require("path")
exports.postAddProduct=(req,res,next)=>{
    const name=req.body.name
    const size=req.body.size
    console.log(name)
    console.log(size)
    res.redirect("/")
}


exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","AddProduct.html"))
}