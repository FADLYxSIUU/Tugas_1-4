const express = require('express')
const bodyParser = require("body-parser") // memanggil library body-parser
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const Controller1= require('../controllers/Controller1')

app.post("/bangunRuangKubus", Controller1.bangunRuangKubus)
app.post("/bangunRuangLimas", Controller1.bangunRuangLimas)
app.post("/bangunRuangTabung", Controller1.bangunRuangTabung)
app.post("/bangunRuangBola", Controller1.bangunRuangBola)

module.exports = app