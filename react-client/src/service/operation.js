import { apiConnector } from "./apiConnector";
import { endpoints } from "./api";

const {GET_CARS}=endpoints;
//get distance using longitude and latitude

export const getCars=async(lat1,lon1,lat2,lon2)=>{
    try{
    const res=await apiConnector('POSt',GET_CARS,{lat1,lon1,lat2,lon2})
    return res.data;
    }
 catch(error)
 {
    return error.response.data
 }
}
