const express = require('express')
const bodyParser = require("body-parser") // memanggil library body-parser
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const Controller2= require('../controllers/Controller2')

app.get ("/celcius/:c", Controller2.celcius)
app.get ("/reamur/:r", Controller2.reamur)
app.get ("/kelvin/:k", Controller2.kelvin)
app.get ("/fahrenheit/:f", Controller2.fahrenheit)

module.exports = app