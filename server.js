const express=require("express")
const http=require("http")
const bodyParser=require("body-parser")
const path=require("path")
const app=express()
const server=http.createServer(app)
app.use(bodyParser({extended:true}))


app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.post("/",(req,res,next)=>{
    const name=req.body.name
    const size=req.body.size
    console.log(name)
    console.log(size)
})


server.listen(3000,()=>console.log("Server started on port 3000"))