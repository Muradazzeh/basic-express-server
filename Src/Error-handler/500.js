`use strict`

module.exports=(req,res,next)=>{
res.status(500).send({
    code :500,
    rout :req.path,
    massage : `Server error : ${error.massage}`
})
}