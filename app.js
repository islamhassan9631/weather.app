
// const request =require('request');
// const cast = require('./forcast');
// const url="http://api.weatherstack.com/current?access_key=d19481cd4a9e07a45aa26b47509dc40b&query=30.050,31.250"
// request({url,json:true},(error,response)=>{
//     if(error){
//         console.log('errhkjjkbjk');
//     }
//     else if(response.body.error){
//         console.log(response.body.error.type);
//     }
//     else{
//           console.log('in'+response.body.location.country)
//     }


// })
// const id ='http://api.mapbox.com/geocoding/v5/mapbox.places/hghhhf.json?access_token=pk.eyJ1IjoiaXNsYW1oYXNzYW4iLCJhIjoiY2t6ZmJhbWR0MHA1MjJ2bzB1ZmJhdGtkdCJ9.3rltwT5FVfEXZVWyf19lYg'

// request({url: id,json:true},(error,response)=>{
//     if(error){
//         console.log('no');
//     }
//     else if(response.body.message){
//         console.log(response.body.message);
//     }
//     else if(response.body. features.length == 0){
//         console.log("ghghjghgghghghg");
//     }

//     else{
//           console.log(response.body.features[4].center)
//     }


// })
// const cast=(latitude,longtitiude,callback)=>{
//     const url='chttp://api.weatherstack.com/current?access_key=d19481cd4a9e07a45aa26b47509dc40b&query=' + latitude + ',' + longtitiud 
//     request({url,json:true},(error,response)=>{
//            if(error){
//                callback('no',undefined)
//            }
//             else if(response.body.error){
//                callback('gdghhg',undefined)
//            }
//         else{
//                   callback(undefined,response.body.current.weather_descriptions[0])
//              }


//          })
// }
const cast = require('./forcast')
const map = require("./map")
console.log(process.argv);

map(process.argv[2], (error, data) => {
    if (error) {
        console.log('error', error)
    }
    else {
        console.log('data', data)
        cast(data.latitude, data.  longtitiude, (error, data) => {
            if (error) {
                console.log('error', error)
            }
            else {
                console.log('data', data)
            }
        })

    }
})
