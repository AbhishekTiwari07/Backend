const request = require('request')
const log = console.log
const location = require('./geocoding.js')
const forecast = require('./weather.js')

let command = process.argv[2]
let place = ''

if(command==undefined)
    log("Please enter a place")
else if(command.split('=')[0]=='place'){
    place = command.split('=')[1]

    location.geocoding(place,(error,{latitude,longitude,place})=>{
        if(error)
            log(error)
        else {
            log("Place:",place)
            forecast.weather(latitude,longitude,(error,{temp,humidity})=>{
                if(error)
                    log(error)
                else {
                    log("Temperature : ",temp)
                    log("Humidity:",humidity)
                }
            })
        }
    })
}
