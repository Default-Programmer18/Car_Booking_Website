import { Alert, Button, Datepicker, Label, TextInput } from "flowbite-react"; // Importing UI components from Flowbite React library
import { useContext, useEffect, useState } from "react"; // Importing React hooks
import { addresses } from "../../assets/data/address.js"; // Importing address data
import { getCars } from "../../service/operation.js"; // Importing function to get available cars
import { JourneyDetailsContext } from "../../contextApi/JourneyDetailsContext.jsx"; // Importing JourneyDetailsContext

// CarInput component
const CarInput = () => {
  // State variables for form handling
  const disabledDays = {
    before: new Date(),
  };
  const [formError, setFormError] = useState(null); // State for form error
  const [loading, setLoading] = useState(false); // State for loading state
  const {
    setAvailableCars,
    setDistance,
    setDuration,
    carFormData,
    setCarFormData,
    setDropoff,
    setPickup,
  } = useContext(JourneyDetailsContext); // Using context to access and modify journey details

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true
    try {
      // Validation checks
      if (!carFormData.dropOff || !carFormData.pickUp || !carFormData.username) {
        throw new Error("All Fields are Required"); // Throw error if any field is empty
      }

      // Variables for storing coordinates
      let pickupCount = 0,
        dropOffCount = 0,
        lon1 = null,
        lon2 = null,
        lat1 = null,
        lat2 = null;

      // Loop through addresses to find coordinates for pickup and dropoff locations
      addresses.forEach((element) => {
        if (element.address === carFormData.pickUp) {
          pickupCount++;
          lat1 = element.latitude;
          lon1 = element.longitude;
          setPickup({
            address: element.address,
            latitude: lat1,
            longitude: lon1,
          });
        }

        if (element.address === carFormData.dropOff) {
          dropOffCount++;
          lat2 = element.latitude;
          lon2 = element.longitude;
          setDropoff({
            address: element.address,
            latitude: lat2,
            longitude: lon2,
          });
        }
      });

      // Check if pickup and dropoff addresses are selected from the dropdown
      if (pickupCount === 0 || dropOffCount === 0) {
        throw new Error(
          "Pick up and Drop Off address should be chosen from the drop down..."
        );
      }

      // Check if pickup and dropoff addresses are different
      if (carFormData.pickUp === carFormData.dropOff) {
        throw new Error("Pick up and Drop Off address should not be the same");
      }

      // Call API to get available cars
      const response = await getCars(lat1, lon1, lat2, lon2);

      // Handle response from API
      if (response.success) {
        setAvailableCars(response.availableCars);
        setDistance(response.distance);
        setDuration(response.duration);

        // Scroll to the car view section after booking
        const anchorId = "car-view";
        const anchorElement = document.getElementById(anchorId);
        if (anchorElement) {
          anchorElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        throw new Error(response.message); // Throw error if API response is not successful
      }
    } catch (error) {
      setFormError(error.message); // Set form error state if any error occurs
    }

    setLoading(false); // Set loading state to false after form submission
  };

  // Function to handle date change
  const handleChangeDate = (date) => {
    setCarFormData((prevState) => ({
      ...prevState,
      travelDate: date.toLocaleDateString(),
    }));
  };
  console.log(new Date())
  // Function to handle input change
  const handleOnChange = (e) => {
    setCarFormData({
      ...carFormData,
      [e.target.id]: e.target.value,
    });
  };

  // Clear form error after a specified time
  useEffect(() => {
    setTimeout(() => {
      setFormError(null);
    }, 6000);
  }, [formError]);

  // Rendering JSX
  return (
    <div className=" mt-16 w-full  md:mb-0 mb-24 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2  p-4 
     rounded-md bg-gradient-to-b from-teal-300/5 via-white to-blue-300/25     shadow-md shadow-blue-800/40 "
      >
        <p className="text-3xl font-bold text-center text-gray-700">
          Book <span className="text-blue-600">Your</span> Ride
        </p>

        {/* Input field for pick-up location */}
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
        {/* Datalist for pick-up locations */}
        <datalist id="pick-up-list">
          {addresses.map((ele) => {
            return <option key={ele.address} value={ele.address} />;
          })}
        </datalist>

        {/* Input field for drop-off location */}
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
        {/* Datalist for drop-off locations */}
        <datalist id="drop-off-list">
          {addresses.map((ele) => {
            return <option key={ele.address} value={ele.address} />;
          })}
        </datalist>

        {/* Datepicker for travel date */}
        <Label htmlFor="travelDate" className="mt-1 text-gray-600">
          Travel Date:
        </Label>
        <Datepicker
          name="travelDate"
          id="travelDate"
          
          value={carFormData.travelDate}
          onSelectedDateChanged={handleChangeDate}
         
          
        />

        {/* Input field for username */}
        <Label htmlFor="username" className="mt-1 text-gray-600">
          Username:
        </Label>
        <TextInput
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          value={carFormData.username}
          onChange={handleOnChange}
          required
        />

        {/* Submit button */}

        <Button
          type="submit"
          gradientDuoTone="purpleToBlue"
          disabled={loading}
          outline
        >
          {loading ? "Loading..." : "Book a Ride"}
        </Button>
      </form>
      {formError && (
        <Alert color="failure" className="mt-3">
          {formError}
        </Alert>
      )}
    </div>
  );
};

export default CarInput;
