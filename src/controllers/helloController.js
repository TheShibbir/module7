exports.helloGet=(req, res)=>{
res.status(200).json({status:"success",data:"this my first get controller create"})
}
exports.helloPost=(req, res)=>{
    res.status(201).json({status:"success",data:"this my first post controller create"})
    }