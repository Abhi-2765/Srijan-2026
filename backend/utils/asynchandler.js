const asynchandler=(fxn)=>async(req,res,next)=>{
    try{
        await fxn(req,res,next);
    }
    catch(err){
        res.status(err.code||500).json({
            success:false,
            message:err.message
        })
    }
}
export {asynchandler}