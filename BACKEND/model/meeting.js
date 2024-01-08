const mongoose = require('mongoose')

//creation of the schemma 

const meetingSchema = mongoose.Schema({
  
    name:String ,
    postUrl:String ,
    rating:String ,
    price: String 

})

module.exports = mongoose.model('meetingSchema',meetingSchema)