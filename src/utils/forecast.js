const request = require("request");
const forecast = (latitude,longitude,callback) =>
{
 const url = 'https://api.darksky.net/forecast/e8ad83321ff4fef77d6a9370cbe2acbb/'+latitude+','+ longitude
request({url: url},(error,response)=> 
{  if(error)
    {
        callback('Unable to connect to network',undefined)
    }
    else if(response.body.error)
    {
        callback('location not found,Try another research',undefined)
    }
    else{
    const data = JSON.parse(response.body);
    var k = (data.currently.temperature-32)*(5/9);
    callback(undefined,data.daily.data[0].summary+"Current temperature is " + k + ".There are "+data.currently.precipProbability+"% chances of rain. ")
}
})
}
module.exports = forecast