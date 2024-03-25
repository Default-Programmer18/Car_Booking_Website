import car1 from "../../assets/car1.jpg"
import CarInput from "./CarInput"
const Hero=()=>{
    return(
        <div className="flex gap-4 w-screen h-[35em] px-10  ">
        <img src={car1} className="w-[60%] mt-10   md:block hidden"></img>
        <CarInput />

        <div></div>
        </div>
    )

}
export default Hero