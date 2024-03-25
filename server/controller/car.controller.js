const {errorHandler}=require("../utils/errorHandler.js");
const Cars=require("../models/car.schema.js")


const getCars=async(req,res,next)=>{

    
    try{
        const respone=await Cars.find({availability:true})
       

    if(!respone)
        next( errorHandler(400,"Cars are not available for the rute right now..."))
    //Shuffle the array
  const shuffled = respone.sort(() => Math.random() - 0.5);
  // Select the first 5 elements
  const randomElements = shuffled.slice(0, Math.min(shuffled.length,5));
  console.log(req.duration)
  const result={
    availableCars:randomElements,
    duration:req.duration,
    distance:req.distance,
    success:true
  }

  res.status(200).json(result);
}
catch(error){
   
    next(error)
}



}

module.exports={
    getCars,
    
}