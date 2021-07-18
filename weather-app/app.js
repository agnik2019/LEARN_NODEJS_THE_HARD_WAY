const geocode = require('./utils/geocode')

// const url ="http://api.weatherstack.com/current?access_key=3a97ca219bae8fcff391e93a56ed6ecb&query=37.8267,-122.4233"

// request({ url : url,json: true},(error,response)=>{
//     if(!error){
//     console.log(response.body.current.weather_descriptions[0]+". It is currently "+response.body.current.temperature+" and Real feel is "+response.body.current.feelslike);
//     } else if(response.body.error){
//         console.log("unable to find location")
//     }
//     else{
//         console.log("unable to connect to weather services ");
//     }
// })

// Print the lat/long for Los Angeles


// const geocodingURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWduaWtzYWhhIiwiYSI6ImNraDUweGlrdzA0aGcyc3J6Z2Y0NzNpZnEifQ.9fbu4DY4MCS8G3oDtO7blA";
// request({ url : geocodingURL,json: true},(error,response)=>{
//     if(error){
//         console.log("unable to connect weather services ")
//     } else if(response.body.features.length === 0){
//         console.log("Unable to find location. Try another Search")
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0]
//         console.log("lattitude: "+latitude+" longitude: "+longitude)
//     }
// })

geocode('Dhaka', (error,data)=> {
    console.log('Error', error);
    console.log('Data',data);
})

