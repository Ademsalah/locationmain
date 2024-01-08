const express = require('express')

const afra7rRoute = express.Router()

const { deletafra7,GetById,Addafra7,Getafra7, Updateafra7}=require('../controller/afra7')

//get route http://localhost:4000/afra7/jibtafra7

afra7rRoute.get('/jiblisala',Getafra7) 

//delet routes  http://localhost:4000/afra7/afra7

afra7rRoute.delete('/fesekhsala/:id',deletafra7)

//post route  http://localhost:4000/afra7/zidafra7
afra7rRoute.post('/zidousala',Addafra7)

//put route http://localhost:4000/afra7/updatyafra7
 
afra7rRoute.put('/updatysala/:id',Updateafra7)

//and naw it's the get by id   http://localhost:4000/afra7/jibw7daafra7

afra7rRoute.get('/jibsala/:id',GetById)

module.exports = afra7rRoute