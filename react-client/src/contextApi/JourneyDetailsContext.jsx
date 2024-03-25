import React, { createContext, useState, useContext } from 'react';

// Create a context
export const JourneyDetailsContext = createContext();

// Create a provider component
export const JourneyDetailsProvider = ({ children }) => {
  const[availableCars,setAvailableCars]=useState([])
  const [distance,setDistance] = useState(null)
  const[duration,setDuration] = useState(null)
  const [carFormData, setCarFormData] = useState({
    travelDate: new Date().toLocaleDateString(),
    dropOff: "",
    pickUp: "",
    username:"",
  });

  

  return (
    <JourneyDetailsContext.Provider value={{ availableCars,setAvailableCars,distance,setDistance,duration,setDuration ,carFormData, setCarFormData}}>
      {children}
    </JourneyDetailsContext.Provider>
  );
};