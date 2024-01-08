const express = require('express')

const stadiumRoute = express.Router()

const { deletstadium,GetById,Updatestadium,Addstadium,Getstadium, UpdateStadium}=require('../controller/stadium')

//get route http://localhost:4000/stadium/jibtstadium

 stadiumRoute.get('/jibtstadium',Getstadium) 

//delet routes  http://localhost:4000/stadium/stadium

stadiumRoute.delete('/stadium/:id',deletstadium)

//post route  http://localhost:4000/stadium/zidstadium
stadiumRoute.post('/zidstadium',Addstadium)

//put route http://localhost:4000/stadium/updatystadium
 
stadiumRoute.put('/updatystadium/:id',UpdateStadium)

//and naw it's the get by id   http://localhost:4000/stadium/jibw7dastadium

stadiumRoute.get('/jibw7dastadium/:id',GetById)




module.exports = stadiumRoute