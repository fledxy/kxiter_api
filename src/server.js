
require('dotenv').config() // goi file env
const express = require('express')
// const path = require('path')
const connection = require('./config/database').default
const { env } = require('process')
// import { Express } from "express-serve-static-core"
const dotenv = require('dotenv')
const authorRoute = require('./routes/author')
const authenticationRoute = require('./routes/authentication')

dotenv.config()
const app = express() // app express
const port = process.env.PORT // port => hardcode
const hostname = process.env.HOST_NAME; // cau hinh env cho 

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine

app.use('/v1/author/', authorRoute)

app.use('/v1/auth/', authenticationRoute)


// chay server
app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)
})




