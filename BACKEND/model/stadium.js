const mongoose = require('mongoose')

//creation of the schemma 

const stadiumSchema = mongoose.Schema({
  
    name:String ,
    postUrl:String ,
    rating:String ,
    price: String ,
    

})

module.exports = mongoose.model('stadiumSchema',stadiumSchema)