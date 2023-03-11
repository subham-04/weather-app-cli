const request = require("request");


const geocode = (address, callback)=>{
    const url = 'https://us1.locationiq.com/v1/search?key=pk.0df5c8b35f84cface9b5e803be61f596&q='+encodeURIComponent(address)+'&format=json&limit=1';

    request({url: url, json:true}, (error,response)=>{
        if(error){
            callback(`Unable to connect to the location services`, undefined);
        }else if(response.body.error){
            callback(`Unable to find location`, undefined);
        }else{
            const data = response.body[0];
            callback(undefined,{
                latitude: data.lat,
                longtitude: data.lon,
                location: data.display_name
            })
        }
    })
}


module.exports = geocode;