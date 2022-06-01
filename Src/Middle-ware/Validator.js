`use strict`
const serverError=require("../Error-handler/500")
function Validator (){
return (req,res,next)=>{
let name =req.query.name
console.log(name)
    console.log( typeof name)
    if(typeof name=="string"){
        next()
    }
    else{
        serverError()
    }
    
}
}
    
module.exports = Validator()