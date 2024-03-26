const express = require('express');
const { carBookingConfirmation, getBookedCarDetails } = require('../controller/booking.controller');
const router=express.Router();

router.post("/bookCar",carBookingConfirmation)
router.get("/getBookedCarDetails",getBookedCarDetails)


module.exports=router