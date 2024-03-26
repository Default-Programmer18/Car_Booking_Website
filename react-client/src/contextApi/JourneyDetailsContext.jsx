import React, { createContext, useState, useContext } from "react";

// Create a context
export const JourneyDetailsContext = createContext();

// Create a provider component
export const JourneyDetailsProvider = ({ children }) => {
  // State variables for managing journey details
  const [availableCars, setAvailableCars] = useState([]); // State for available cars
  const [distance, setDistance] = useState(null); // State for distance
  const [duration, setDuration] = useState(null); // State for duration
  const [carFormData, setCarFormData] = useState({
    // State for form data
    travelDate: new Date().toLocaleDateString(),
    dropOff: "",
    pickUp: "",
    username: "",
  });
  const [pickup, setPickup] = useState({}); // State for pick-up location
  const [dropoff, setDropoff] = useState({}); // State for drop-off location

  return (
    <JourneyDetailsContext.Provider
      value={{
        availableCars,
        setAvailableCars,
        distance,
        setDistance,
        duration,
        setDuration,
        carFormData,
        setCarFormData,
        dropoff,
        setDropoff,
        pickup,
        setPickup,
      }}
    >
      {children}
    </JourneyDetailsContext.Provider>
  );
};
