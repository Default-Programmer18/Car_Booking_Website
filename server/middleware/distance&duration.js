exports.getDistanceAndDuration = async(req,resp,next)=>{
    try {
        const {lat1,lon1,lat2,lon2} = req.body;
       
        // Construct the URL with path variables
        const url = new URL(`http://router.project-osrm.org/route/v1/driving/${lon1},${lat1};${lon2},${lat2}?overview=false`);

    
        // Make a GET request to the third-party API using fetch
        const response = await fetch(url.toString());
        const data = await response.json();
    
        // Extract the distance from the response
        const distance = data.routes[0].distance/1000;
        const duration = data.routes[0].duration/60;
    
        // add the distance and duration to the req and pass it to the next handler
        req.duration = duration
        req.distance = distance
        next()
        
    
    } catch (error) {
        // If an error occurs, send an error response

        return resp.status(500).json({ error: 'Error fetching distance and duration' });
      }
    
}

