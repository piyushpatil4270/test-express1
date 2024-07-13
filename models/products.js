const fs=require("fs")
const path=require("path")

module.exports=class Product{
    constructor(t){
        this.title=t
    }
    save(){
       
        let products=[]
        fs.readFile(path.join(__dirname,"..","data","products.json"),(err,data)=>{
            if(err){
                console.log(err)
                return
            }
            try {
                products=JSON.parse(data)
            } catch (error) {
                console.log(err)
                products=[]
            }
            products.push(this)
            fs.writeFile(path.join(__dirname,"..","data","products.json"),JSON.stringify(products),(err)=>console.log(err))
        })
    }
    static fetchAll(cb){
        let products=[]
        fs.readFile(path.join(__dirname,"..","data","products.json"),(err,data)=>{
            if(err){
                console.log(err)
               cb([])
            }
            try {
                products=JSON.parse(data)
                cb(products)
            } catch (error) {
                console.log(err)
                cb([])
            }
     
        })
    }

}