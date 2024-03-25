const express = require('express');
const { getCars } = require('../controller/car.controller.js');
const { getDistanceAndDuration } = require('../middleware/distance&duration.js');
const router=express.Router();

router.post('/getAvailableCars',getDistanceAndDuration ,getCars)

module.exports=router

