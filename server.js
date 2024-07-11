const express=require("express")
const http=require("http")
const bodyParser=require("body-parser")
const path=require("path")
const app=express()
const adminRouter=require("./routes/admin")
const shopRouter=require("./routes/shop")
const server=http.createServer(app)
app.use(bodyParser({extended:true}))

app.use("/admin",adminRouter)
app.use((req,res,next)=>{
    res.status(404).send("<h>Page not Found</h1>")
})



server.listen(3000,()=>console.log("Server started on port 3000"))