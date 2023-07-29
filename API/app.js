const  Express= require('express')
const router = require('./router.js') 
const bodyParser = require('body-parser')
const cors = require('cors')

const app =Express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(router);

  
module.exports = app;