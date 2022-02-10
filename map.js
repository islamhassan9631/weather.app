const request =require('request')
const map=(maap,callback)=>{
    const id =`http://api.mapbox.com/geocoding/v5/mapbox.places/${maap}.json?access_token=pk.eyJ1IjoiaXNsYW1oYXNzYW4iLCJhIjoiY2t6ZmJhbWR0MHA1MjJ2bzB1ZmJhdGtkdCJ9.3rltwT5FVfEXZVWyf19lYg`

request({url: id,json:true},(error,response)=>{
    if(error){
       callback('notttt',undefined)
    }
    else if(response.body.message){
        callback(response.body.message);
    }
    else if(response.body. features.length == 0){
        callback("ghghjghgghghghg");
    }

    else{
        callback(undefined,{
            latitude:response.body.features[0].center[0],
         longtitiude:response.body.features[0].center[1],
         place:response.body.features[0].place_name,
        })
          

    }
  
    
})
}
module.exports =map
