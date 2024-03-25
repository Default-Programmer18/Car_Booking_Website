const mongoose= require('mongoose')
 const carSchema=new mongoose.Schema({
    
        carModel:{
            type:String,
            required:true
        },

        driverName:{
            type:String,
            required:true
        },

        availability:{
            type:Boolean,
            required:true
        },      
        amountChargedPerKm:{
            type:String,
            required:true
        }

 });

 const Cars=mongoose.model('Cars',carSchema);
 module.exports=Cars;
