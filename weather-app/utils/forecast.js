const request = require('request');
const forecast = (latitude , longitude, callback) => {

    const url ='http://api.weatherstack.com/current?access_key=3a97ca219bae8fcff391e93a56ed6ecb&query='+latitude+','+longitude;//+'&units=f';

    request({url:url, json: true}, (error, response)=> {
        if(error){
            callback('unable to connect to weather service',undefined);
        } else if(response.body.error){
            callback('unable to find location', undefined);
        } else {
            callback(undefined,response.body.current.weather_descriptions[0]+". It is currently "+response.body.current.temperature+" and Real feel is "+response.body.current.feelslike)
        }

    })

}

module.exports = forecast;