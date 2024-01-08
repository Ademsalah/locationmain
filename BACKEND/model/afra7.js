const mongoose = require('mongoose')

//creation of the schemma 

const afra7Schema = mongoose.Schema({
  
    name:String ,
    postUrl:String ,
    rating:String ,
    price: String 

})

module.exports = mongoose.model('afra7Schema',afra7Schema)