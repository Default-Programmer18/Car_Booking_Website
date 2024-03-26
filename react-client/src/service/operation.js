import { apiConnector } from "./apiConnector";
import { endpoints } from "./api";

// Destructure endpoint constants from the endpoints object
const { GET_CARS, BOOK_CAR, GET_ALL_BOOKING_DETAILS } = endpoints;

// Function to get available cars based on location coordinates
export const getCars = async (lat1, lon1, lat2, lon2) => {
   try {
      const res = await apiConnector('POSt', GET_CARS, { lat1, lon1, lat2, lon2 })
      return res.data;
   }
   catch (error) {
      return error.response.data
   }
}
// Function to get details of all booked cars
export const bookCar = async (carId, pickup, dropoff, username, distance, duration) => {

   try {
      const res = await apiConnector('POSt', BOOK_CAR, { pickup, dropoff, name: username, carId, distance, duration });
      return res.data;
   }
   catch (error) {
      return error.response.data
   }
}

export const getBookedCarDetails = async () => {
   try {
      const res = await apiConnector('GET', GET_ALL_BOOKING_DETAILS)


      return res.data;
   }
   catch (error) { return error.response.data }
}