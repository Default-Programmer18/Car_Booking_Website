import {Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { getBookedCarDetails } from "../service/operation";

const BookingDetails = () => {
  const [error, setError] = useState(null);
  const [bookedDetails, setBookedDetails] = useState([]);
  // Effect hook to fetch booked car details when component mounts
  useEffect(() => {
    (async () => {
      try {
        const res = await getBookedCarDetails();
        if (!res.success) {
          throw new Error(res.message);
        }
        setBookedDetails(res.bookingDetails);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);
  return (
    <>{/* Conditional rendering based on whether bookedDetails array is empty */}
      {bookedDetails.length === 0 ? (
        <p className="mt-20 text-2xl text-blue-900 font-semibold text-center">
          {" "}
          No booking done yet....{" "}
        </p>
      ) : (
        <div className="min-h-screen table-auto overflow-x-scroll mx-4 p-3 ">
          <Table hoverable striped>
            <Table.Head className="text-blue-800">
              <Table.HeadCell>Booking Date</Table.HeadCell>
              <Table.HeadCell>Car Model</Table.HeadCell>
              <Table.HeadCell>Driver</Table.HeadCell>
              <Table.HeadCell>Customer Name</Table.HeadCell>
              <Table.HeadCell>Pickup Address</Table.HeadCell>
              <Table.HeadCell>Destination</Table.HeadCell>
              <Table.HeadCell>Distance</Table.HeadCell>
              <Table.HeadCell>Duration(approx.)</Table.HeadCell>
              <Table.HeadCell>Total Fare</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y ">
              {bookedDetails.map((details) => (
                <Table.Row
                  key={details._id}
                  className="bg-white  dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>
                    {new Date(details.createdAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{details.car.carModel}</Table.Cell>
                  <Table.Cell>{details.car.driverName}</Table.Cell>
                  <Table.Cell>{details.user.name}</Table.Cell>
                  <Table.Cell>{details.pickup_location.address}</Table.Cell>
                  <Table.Cell>{details.dropoff_location.address}</Table.Cell>
                  <Table.Cell>
                    {parseFloat(details.distance).toFixed(2)} km
                  </Table.Cell>
                  <Table.Cell>
                    {parseFloat(details.duration).toFixed(2)} min
                  </Table.Cell>
                  <Table.Cell>
                    Rs.{" "}
                    {parseFloat(details.distance).toFixed(2) *
                      details.car.amountChargedPerKm}
                    /-
                  </Table.Cell>
                </Table.Row>
              ))}{" "}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
};

export default BookingDetails;
