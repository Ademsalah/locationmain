const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const connectdb = require ('./config/connecteddb')
const userRoute = require ('./routes/routeuser')
const stadiumRoute = require('./routes/stadiumRoute')
const afra7rRoute = require('./routes/afra7Route')
const meetingrRoute = require('./routes/meetingRoute')
const categorieRoute = require('./routes/categories')
const produitRoute = require('./routes/produit')
require('dotenv').config()
app.use(cors())
app.use(express.json())

//partie appel la cnx db
connectdb()

//path pincipale de l'authentification 
app.use('/auth',userRoute)

/* ///////////////rani nkhdem partie routet teb3in el admin /////////////// */
/* partie route yzid beha el admin les stadiums */
app.use('/stadium',stadiumRoute)


/* ///////////////rani nkhdem partie routet teb3in el admin /////////////// */
/* partie route yzid beha el admin les salet afra7 */

app.use('/saletAfra7',afra7rRoute)
/* ///////////////rani nkhdem partie routet teb3in el client /////////////// */

app.use('/meetingRoom',meetingrRoute)


app.use('/categorie',categorieRoute)


app.use('/produits',produitRoute)
app.listen(port,err=>{
    err?console.log(err):console.log(`go port ${port} `)
})