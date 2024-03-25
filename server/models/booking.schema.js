const mongoose = require('mongoose')
const bookingSchema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },

    pickup_location: {
        latitude:
         {
            type: string,
            required: true
        },
        longitude: 
        {
            type: string,
            required: true
        },
        address:{
            type: string,
            required: true
        },
    },
    dropoff_location: {
        latitude:
         {
            type: string,
            required: true
        },
        longitude: 
        {
            type: string,
            required: true
        },
        address:{
            type: string,
            required: true
        },
    },
    carId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    }

})
const Booking=mongoose.model('Booking',bookingSchema)
module.exports = Booking;
