import { apiConnector } from "./apiConnector";

//get distance using longitude and latitude
export const getDistance=async(lat1,lon1,lat2,lon2)=>{
    const res=await apiConnector('GET',`http://router.project-osrm.org/route/v1/driving/${lon1},${lat1};${lon2},${lat2}?overview=false`)
    console.log(res)
    return res;
 }
