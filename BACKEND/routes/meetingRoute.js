const express = require('express')

const meetingrRoute = express.Router()

const { deletmeeting,GetById,Addmeeting,Getmeeting, Updatemeeting}=require('../controller/meeting')

//get route http://localhost:4000/meeting/jibtmeeting

meetingrRoute.get('/jibliroom',Getmeeting) 

//delet routes  http://localhost:4000/meeting/meeting

meetingrRoute.delete('/fesekhroom/:id',deletmeeting)

//post route  http://localhost:4000/meeting/zidmeeting
meetingrRoute.post('/zidouroom',Addmeeting)

//put route http://localhost:4000/meeting/updatymeeting
 
meetingrRoute.put('/updatyroom/:id',Updatemeeting)

//and naw it's the get by id   http://localhost:4000/meeting/jibw7dameeting

meetingrRoute.get('/jibroom/:id',GetById)




module.exports = meetingrRoute