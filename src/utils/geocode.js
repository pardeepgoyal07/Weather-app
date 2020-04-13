const request = require('request')

const geocode = (address,callback) =>{
    const geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoicGFyZGVlcDA3IiwiYSI6ImNrN296d29pZTBjdnUzc3N3YmYzeWhhbXgifQ.a7iT6yvHaPXZyfS3mrecBw&limit=1'
    request({url: geocode, json: true},(error,response) => {
        if(error)
        {
            callback('Unable to connect to network',undefined)
        }
        else if(response.body.error)
        {
           callback('Unable to find location,Try another search!',undefined)
        }
        else
        {
        callback(undefined,{    
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name   
        })
    }
    })
    }
 module.exports = geocode