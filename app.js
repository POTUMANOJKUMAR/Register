const express = require("express")
const Router=require("./router/routerregister");

const dot=require("dotenv")
dot.config()


const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api",Router)

app.listen(3000,(err)=>{
    if (err) console.log(err)
    else console.log("server connected successfully!")
})


