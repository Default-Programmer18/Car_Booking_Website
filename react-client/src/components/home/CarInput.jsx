import { Alert, Button, Datepicker, Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { addresses } from "../../assets/data/address.js";
import { getCars } from "../../service/operation.js";
import { JourneyDetailsContext } from "../../contextApi/JourneyDetailsContext.jsx";

const CarInput = () => {
  
  const [formError, setFormError] = useState(null);
  const[loading, setLoading] = useState(false)
  const {setAvailableCars,setDistance,setDuration,carFormData, setCarFormData}=useContext(JourneyDetailsContext);
  
  
  
  const handleSubmit = async(e) => {
  
    e.preventDefault();
    setLoading(true)
    try{
    if (
      !carFormData.dropOff &&
      !carFormData.pickUp &&
      !carFormData.username
    ) {console.log("here")
    console.log(carFormData)
      throw new Error("All Fields are Required");
    }

    let pickupCount = 0,
      dropOffCount = 0,
      lon1=null,lon2=null,lat1=null,lat2=null;

    addresses.forEach((element) => {
      if (element.address === carFormData.pickUp) 
      {
        pickupCount++;
       
        lat1=element.latitude ;
        lon1=element.longitude;
        }

      if (element.address === carFormData.dropOff) {
        dropOffCount++;
       
        lat2=element.latitude ;
        lon2=element.longitude;
      }
    });
    
    if (pickupCount === 0 || dropOffCount === 0) {
      throw new Error(
        "Pick up and Drop Off address should be choosen from the drop down..."
      );
     
    }
    if(carFormData.pickUp===carFormData.dropOff)
    { 
      throw new Error("Pick up and Drop Off address should not be same");
    }


    const response = await getCars(lat1,lon1,lat2,lon2)
    
    
    if(response.success)
    {
      setAvailableCars(response.availableCars)
      setDistance(response.distance)
      setDuration(response.duration)
      console.log(response)
     
    }
    else{
      console.log(response)
      throw new Error(response.message)
    }
  }
  catch(error){
    console.log(error)
    setFormError(error.message)

 
  }
 
  setLoading(false)

  };
 
  
  const handleChangeDate = (date) => {
    console.log(date);
    setCarFormData((prevState) => ({
      ...prevState,
      travelDate: date.toLocaleDateString(),
    }));
  };
  const handleOnChange = (e) => {
    setCarFormData({
      ...carFormData,
      [e.target.id]: e.target.value,
    });
  };
 // console.log(carFormData);

  useEffect(() => {
    setTimeout(() => {
      setFormError(null);
    }, 6000);
  }, [formError]);

  

  return (
    <div className=" mt-16 w-full md:mb-0 mb-24 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2  p-4 
     rounded-md bg-gradient-to-b from-teal-300/5 via-white to-blue-300/25     shadow-md shadow-blue-800/40 "
      >
        <p className="text-3xl font-bold text-center text-gray-700">
          Book <span className="text-blue-600">Your</span> Ride
        </p>

        <Label htmlFor="pickUp" className="mt-1 text-gray-600">
          To:
        </Label>

        <TextInput
          type="text"
          list="pick-up-list"
          placeholder="Pick-up Location"
          name="pickUp"
          id="pickUp"
          value={carFormData.pickUp}
          
          onChange={handleOnChange}
          required
        />
        <datalist id="pick-up-list">
          {addresses.map((ele) => {
            return <option key={ele.address} value={ele.address} />;
          })}
        </datalist>

        <Label htmlFor="dropOff" className="mt-1 text-gray-600">
          From:
        </Label>
        <TextInput
          type="text"
          list="drop-off-list"
          placeholder="Drop-off Location"
          name="dropOff"
          id="dropOff"
          value={carFormData.dropOff}
          onChange={handleOnChange}
          required
        />
        <datalist id="drop-off-list">
          {addresses.map((ele) => {
            return <option key={ele.address} value={ele.address} />;
          })}
        </datalist>

        <Label htmlFor="travelDate" className="mt-1 text-gray-600">
          Travel Date:
        </Label>
        <Datepicker
          name="traveldate"
          id="traveldate"
          value={carFormData.travelDate}
          onSelectedDateChanged={handleChangeDate}
        />

        <Label htmlFor="username" className="mt-1 text-gray-600">
          Username:
        </Label>
        <TextInput
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={carFormData.username}
          onChange={handleOnChange}
          required
        ></TextInput>

      <Button type="submit" gradientDuoTone="purpleToBlue" disabled={loading} outline>
          {loading?"Loading...":"Book a Ride"}
        </Button>
      </form>
      {formError && <Alert color="failure" className="mt-3">{formError}</Alert>}
    </div>
  );
};

export default CarInput;
