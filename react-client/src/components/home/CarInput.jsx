import { Alert, Button, Datepicker, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

const CarInput = () => {
  const [carFormData, setCarFormData] = useState({
    travelDate: new Date().toLocaleDateString(),
  });
  const [formError,setFormError] = useState(null);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!carFormData.dropOff && !carFormData.pickUp && !carFormData.travelDate && !carFormData.username)
    setFormError(true)

    console.log(carFormData);

  }
  const handleChangeDate = (date)=>{
    console.log(date)
    setCarFormData((prevState)=>(
        {...prevState,
        travelDate:date.toLocaleDateString()}
    ))
}
  const handleOnChange = (e) => {
    setCarFormData({
      ...carFormData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(carFormData)

  useEffect(()=>{
    setTimeout(() => {
        setFormError(null);
        
    }, 6000);
  },[formError])

  return (
    <div className=" mt-16 w-full ">
   
      <form onSubmit={handleSubmit}
        className="flex flex-col gap-2  p-4 
     rounded-md bg-gradient-to-b from-teal-300/5 via-white to-blue-300/25     shadow-md shadow-blue-800/40 "
      >
       <p className="text-3xl font-bold text-center text-gray-700">Book <span className="text-blue-600">Your</span> Ride</p>

        <Label htmlFor="pickUp" className="mt-1 text-gray-600">
          To:
        </Label>
        <TextInput
          type="text"
          placeholder="Pick-up Location"
          name="pickUp"
          id="pickUp"
          onChange={handleOnChange}
          required
        ></TextInput>

        <Label htmlFor="dropOff" className="mt-1 text-gray-600">
          From:
        </Label>
        <TextInput
          type="text"
          placeholder="Drop-off Location"
          name="dropOff"
          id="dropOff"
          onChange={handleOnChange}
          required
        ></TextInput>

        <Label htmlFor="travelDate" className="mt-1 text-gray-600">
          Travel Date:
        </Label>
        <Datepicker name="traveldate" id="traveldate" onSelectedDateChanged={handleChangeDate} 
            
        />

        <Label htmlFor="username" className="mt-1 text-gray-600">
          Username:
        </Label>
        <TextInput
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleOnChange}
          required
        ></TextInput>

        <Button type="submit"  gradientDuoTone="purpleToBlue" outline>Book a Ride</Button>

      </form>
      {formError && <Alert>All Fields are Required</Alert>}
    </div>
  );
};

export default CarInput;
