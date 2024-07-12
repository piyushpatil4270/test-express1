const path=require("path")
exports.Success=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","Success.html"))
}


exports.Contact=(req,res,next)=>{
    console.log(path.join(__dirname,"..","views","Contact.html"))
    const filepath=path.join(__dirname,"..","views","Contact.html")
    res.sendFile(filepath)
   
}