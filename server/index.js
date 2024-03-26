const express = require("express");
const app = express();
const cors = require("cors");
const carsRouter = require("./routers/car.routes.js");
const bookingRouter = require("./routers/booking.routes.js");
const dbConnect = require("./database/dbConnect.js");
dbConnect();

const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow requests from any origin
    credentials: true, // Allow cookies and authorization headers
  })
);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});

app.use("/api/v1/cars", carsRouter);
app.use("/api/v1/booking", bookingRouter);

//middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const success = false;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    statusCode,
    success,
    message,
  });
});
