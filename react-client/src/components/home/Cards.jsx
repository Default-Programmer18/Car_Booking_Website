
import { Button, Card, Modal } from "flowbite-react";
import card1 from "../../assets/cards1.jpg";
import card2 from "../../assets/cards2.jpg"

import { FaCar } from "react-icons/fa";

import { RiRoadMapFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { TbLineDotted } from "react-icons/tb";
import React, { useContext, useState } from "react";
import { JourneyDetailsContext } from "../../contextApi/JourneyDetailsContext";
import { MdLocationOn } from "react-icons/md";



const Cards = () => {
 
  const {availableCars,distance,duration,carFormData}=useContext(JourneyDetailsContext);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  console.log(availableCars)
  
   const handleBookCar = (car) => {
    setShowModal(true);
    setSelectedCar(car);
  };
  const handleConfirmation = ()=>{

  }
 
  return (
    <div
    
      id="car-view"
      className="h-fit py-8 bg-gradient-to-t from-white via-sky-200/25 to-blue-200/15 w-full flex items-center justify-center gap-7 flex-col"
    >
      {distance && duration && (
        <div className="flex justify-center gap-4 md:my-5 mt-20 mb-6 md:flex-row flex-col font-semibold text-3xl items-center w-[80%]">
          <div className="md:text-sm text-xs bg-gradient-to-bl p-3 rounded-3xl  from-green-200/40 via-white to to-blue-200/50">
            <h5 className="flex justify-start items-center gap-2">
              <span className="p-2 bg-blue-300 rounded-full">
                <MdLocationOn className="md:text-2xl text-sm"></MdLocationOn>
              </span>
              <span className="md:text-2xl text-sm font-mono">From</span>
              <span className="ml-[10%] text-slate-500">
                Now: {new Date().toLocaleTimeString()}
              </span>
            </h5>
            <p className="text-green-800 mt-2">{carFormData.pickUp}</p>
          </div>
          <div className="flex md:flex-col flex-row justify-center items-center w-[60%] gap-3">
            {duration && (
              <p className="md:text-lg text-sm">
                Duration:
                <span className="text-green-500 md:text-lg text-sm  font-bold">
                  {" "}
                  {duration.toFixed(2)} min
                </span>
              </p>
            )}
            <div className="border-2  border-dashed border-green-700 md:w-full md:h-0 h-24"></div>
            {distance && (
              <p className="md:text-lg text-sm">
                Distance:{" "}
                <span className="text-green-500 md:text-lg text-sm font-bold">
                  {distance.toFixed(2)} km
                </span>
              </p>
            )}
          </div>
          <div className="md:text-sm text-xs rounded-3xl bg-gradient-to-bl p-3  from-green-200/40 via-white to to-blue-200/50">
            <h5 className="flex justify-start items-center gap-2">
              <span className="p-2 bg-blue-300 rounded-full">
                <MdLocationOn className="md:text-2xl text-sm"></MdLocationOn>
              </span>
              <span className="md:text-2xl text-sm font-mono">To</span>
              <span className="ml-[10%] text-slate-500">
                Expected:{" "}
                {new Date(
                  Date.now() + duration * 60 * 1000
                ).toLocaleTimeString()}
              </span>
            </h5>
            <p className="text-green-800 mt-2">{carFormData.dropOff}</p>
          </div>
        </div>
      )}
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  ">
        {availableCars.length === 0 && distance ? (
          <Alert color={"failure"}>Cars are not available for this route at the moment...</Alert>
        ) : (
          availableCars.map((element, index) => (
            <Card
              className="max-w-xl md:max-h-[27rem] h-fit text-pretty car"
              imgSrc={index % 2 === 0 ? card1 : card2}
              horizontal
              key={element._id}
            >
              <div>
                <h5 className="text-lg font-bold tracking-tight sm:mt-0  text-gray-900 dark:text-white  ">
                  Car Model: {element.carModel}
                </h5>
                <ul>
                  <li className="text-sm text-gray-700 dark:text-gray-400">
                    Driver :{" "}
                    <span className="font-semibold">{element.driverName}</span>
                  </li>
                  <li className="text-sm text-gray-700 dark:text-gray-400">
                    Amount Charged / Km :
                    <span className="font-semibold">
                      {" "}
                      {element.amountChargedPerKm} Km
                    </span>
                  </li>
                  <li className="text-sm text-gray-700 dark:text-gray-400">
                    Total Amount Charged :
                    <span className="font-semibold">
                      {" "}
                      Rs. {(element.amountChargedPerKm * distance).toFixed(2)}
                    </span>
                  </li>
                </ul>
              </div>

              <Button
                outline
                gradientDuoTone="purpleToBlue"
                className="mb-1"
                onClick={() => {
                  index % 2 === 0
                    ? (element.image = card1)
                    : (element.image = card2);
                  handleBookCar(element);
                }}
              >
                Book the Car
              </Button>
            </Card>
          ))
        )}
      </div>

      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>Confirm the Booking</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-center text-gray-500 dark:text-gray-400">
                Are you sure Yow want to book this car
              </p>
              <div className="flex items-center justify-center gap-6">
                <img
                  src={selectedCar.image}
                  className="w-52"
                  alt="selected car"
                ></img>
                <div className="flex flex-col items-start justify-start">
                  <h5 className="text-lg font-bold tracking-tight sm:mt-0  text-gray-900 dark:text-white  ">
                    Car Model: {selectedCar.carModel}
                  </h5>
                  <ul>
                    <li className="text-base text-gray-700 dark:text-gray-400">
                      Driver :{" "}
                      <span className="font-semibold">
                        {selectedCar.driverName}
                      </span>
                    </li>
                    <li className="text-base text-red-700 dark:text-gray-400">
                      Amount Charged / Km :
                      <span className="font-semibold">
                        {" "}
                        {selectedCar.amountChargedPerKm} Km
                      </span>
                    </li>
                    <li className="text-base text-red-700 dark:text-gray-400">
                      Total Amount Charged :
                      <span className="font-semibold">
                        {" "}
                        Rs.{" "}
                        {(selectedCar.amountChargedPerKm * distance).toFixed(2)}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button pill outline gradientDuoTone='greenToBlue' onClick={handleConfirmation}>Confirm</Button>
            <Button gradientDuoTone={"pinkToOrange"} onClick={() => setShowModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );}
  


export default Cards