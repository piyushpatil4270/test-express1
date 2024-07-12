const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const adminRouter=require("./routes/admin")
const shopRouter=require("./routes/shop")
const contactRouter=require("./routes/contact")
const app = express();
const server = http.createServer(app);
app.use(bodyParser({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin",adminRouter)
app.use("/shop",shopRouter)


app.use("/contact",contactRouter)
app.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","Home.html"))
})
app.use((req,res,next)=>{
res.sendFile(path.join(__dirname,"views","Error.html"))
})


server.listen(3000, () => console.log("Server started on port 3000"));
