const express = require('express')

const app = express()
 
app.use(express.json())


const  praktikumController = require('../controllers/praktikumController.js')

app.get("/profil/:name/:age/", praktikumController.profil)
app.post("/bujur_sangkar",praktikumController.bujur_sangkar)

module.exports = app 