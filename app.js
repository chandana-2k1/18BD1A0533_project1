//how will a client send a request
//client sends request using a url
//url and a port number
//GET: http://localhost:9000/hospitals gives you all hospitals
//GET: http://localhost:9000/hospitals/<id> gives you a specific hospital's details
//POST: http://localhost:9000/hospitals you can send data from client to server thereby storing the data in a database
//PATCH: http://localhost:9000/hospitals/<id> can update data

//aliens <=> hospitals
//AliendDBex <=> Hospitals_DB
//alienRouter <=> hosp_router
//alienSchema <=> hosp_schema


//getting express
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Hospitals_DB'
//starting express
const app = express()

//connecting database mongoose
mongoose.connect(url, {useNewUrlParse:true})

//getting the handle of the connection
const con = mongoose.connection


app.use(express.json());

//creating a router
const hosp_router = require('./routes/hospitals')
const vent_router = require('./routes/ventilators')
//middleware, for all hospital requests, you have to send the request 
//to hosp_router
app.use('/hospitals', hosp_router)
app.use('/ventilators', vent_router)
//after connecting to the database, the console 
//has to print that data base is connected
con.on('open', function(){
    console.log('connected....')
})

//after starting a server, you have to listen to it by doing the following
app.listen(9000, function(){
    console.log('Server started')
})