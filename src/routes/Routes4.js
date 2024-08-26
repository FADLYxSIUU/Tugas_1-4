const express = require('express')
const bodyParser = require("body-parser") // memanggil library body-parser
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const Controller4= require('../controllers/Controller4')

app.post("/calculateBMI", Controller4.calculateBMI)

module.exports = app