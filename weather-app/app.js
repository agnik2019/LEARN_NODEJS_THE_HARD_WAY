const request = require('request')

const url ="http://api.weatherstack.com/current?access_key=3a97ca219bae8fcff391e93a56ed6ecb&query=37.8267,-122.4233"

request({ url : url,json: true},(error,response)=>{
    const data = JSON.parse(response.body.current)
})