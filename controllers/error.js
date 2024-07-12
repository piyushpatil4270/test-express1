const path=require("path")
exports.Error=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","Error.html"))
    }