// Base API URL
const baseApi="http://localhost:8000/api/v1"


// Object containing endpoint paths
export const endpoints={

    GET_CARS:baseApi+"/cars/getAvailableCars",
    BOOK_CAR:baseApi+"/booking/bookCar",
    GET_ALL_BOOKING_DETAILS:baseApi+"/booking/getBookedCarDetails"

}
