const asynchandler=(fxn)=>async(req,res,next)=>{
    try{
        await fxn(req,res,next);
    }
    catch(err){
        next(err);
    }
}
export {asynchandler}