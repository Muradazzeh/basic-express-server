
`use strict`
module.exports=(req,res,next)=>{
    res.status(404).send({
        massage:"THE PAGE YOU LOOKING FOR IS NOT AVAILABLE",
        route:req.path,
        code : 404
    })
}