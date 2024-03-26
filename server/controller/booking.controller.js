// Importing required models and error handler utility
const User = require("../models/user.schema.js");
const Cars = require("../models/car.schema.js");
const Booking = require("../models/booking.schema.js");
const { errorHandler } = require("../utils/errorHandler.js");

// Controller function to confirm a car booking
const carBookingConfirmation = async (req, res, next) => {
    try {
        // Destructuring request body
        const { pickup, dropoff, name, carId, distance, duration } = req.body;

        // Checking if the specified car is available
        const checkCar = await Cars.findById(carId);
        if (checkCar.availability === false) {
            // If car is already booked, send an error response
            next(errorHandler(400, "This Car is already booked..."));
            return;
        }

        // Creating a new user for the booking
        const user = await User.create({ name });

        // Creating a new booking entry
        const booking = await Booking.create({ 
            pickup_location: pickup, 
            dropoff_location: dropoff, 
            user: user._id, 
            car: carId, 
            distance, 
            duration 
        });

        // Updating car availability to false
        const car = await Cars.findByIdAndUpdate(carId, { availability: false });

        // Sending a success response with the booking details
        return res.status(200).json({ 
            status: 200, 
            message: "Booking Confirmed", 
            booking: booking, 
            success: true 
        });
    } catch (error) {
        // Passing errors to the next middleware
        next(error);
    }
}

// Controller function to get details of all booked cars
const getBookedCarDetails = async (req, res, next) => {
    try {
        // Retrieving booked car details sorted by creation date and populated with user and car info
        const bookingDetails = await Booking.find().sort({ createdAt: -1 }).populate({ path: "user" }).populate({ path: "car" }).exec();

        // Sending booked car details as a response
        return res.status(200).json({ 
            status: 200, 
            message: "Booked Car Details", 
            bookingDetails: bookingDetails, 
            success: true 
        });
    } catch (error) {
        // Passing errors to the next middleware
        next(error);
    }
}

module.exports = {
    carBookingConfirmation,
    getBookedCarDetails,
}
