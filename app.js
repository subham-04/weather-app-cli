
// const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// Old Code

// // openweathermap API
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=22.34&lon=88.99&appid=181dec9ca1598c9b982c98a5e3da6606&units=metric';

// // Geocoding API from LocationIQ
// const locationURL = 'https://us1.locationiq.com/v1/search?key=pk.0df5c8b35f84cface9b5e803be61f596&q=Kolkata&format=json&limit=1';

// request({ url:url, json:true},(error, response)=>{

//     if(error){ //this error checking is done at lower level (with the os)
//         console.log(`Unable to connect to weather services.`);
//     }else if(response.body.message){ //this error is from the API
//         console.log(`Unable to find location.`);
//     }else{
//         const data = response.body;
        // const temp= data.main.temp;
        // console.log('Temperature is '+temp+'°C');
//     }
    
// })

// request({url:locationURL, json:true},(error,response)=>{

//     if(error){
//         console.log(`Unable to connect to the location services`);
//     }else if(response.body.error){
//         console.log(`Unable to find location`);
//     }else{
//         const data = response.body[0];
//         console.log('Latitude is : '+data.lat+'\nLongitude is : '+data.lon);
//     }
    
// })

const address = process.argv[2];

if(!address){
    console.log('Please Provide Address!');
}else{
    geocode(address, (error, { latitude, longtitude, location})=>{

        if(error){
            return console.log(error);
        }
        
        
        forecast(latitude, longtitude, (error, forecastData)=>{
    
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    
    })
}







