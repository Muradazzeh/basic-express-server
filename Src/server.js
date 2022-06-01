`use strict`
const express=require("express");
const erorHandler=require("./Error-handler/404")
const serverError= require("./Error-handler/500")
const logger=require("./Middle-ware/Logger")
let Validator=require("../Src/Middle-ware/Validator")
const app= express();
app.use(logger)

function start (port){
    app.listen(port,()=>{
        console.log(`Somthing magical happens on Port :${port}`)
    })
}

app.get("/",(req,res)=>{
    res.status(200).send("Welcom to the main page")       
})

app.get("/person",Validator,(req,res)=>{
    // let query= req.query
    // res.json(query)
    res.status(200).send(req.query)
})


app.use("*",erorHandler)
app.use(serverError)

module.exports={
    app:app,
    start:start
}