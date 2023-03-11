const request = require('request')

const forecast = (latitude, longtitude, callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longtitude+'&appid=181dec9ca1598c9b982c98a5e3da6606&units=metric';

    request({url: url, json:true}, (error,response)=>{
        
        
    if(error){ //this error checking is done at lower level (with the os)
        callback(`Unable to connect to weather services.`,undefined);
    }else if(response.body.message){ //this error is from the API
        callback(`Unable to find location.`,undefined);
    }else{
        const data = response.body;
        const temp= data.main.temp;
        const tempLoc= 'Temperature of '+data.name+' is '+temp+'°C';
        callback(undefined, tempLoc);
    }
  
    })
}


module.exports= forecast;