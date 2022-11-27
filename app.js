const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors')
const routes = require('./routes/index')

//Load config
dotenv.config({path: './config/config.env'})
connectDB()


//Crate server
const app = express()

//Body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//cors
app.use(cors())

//routes
app.use('/', routes)

const PORT = process.env.PORT || 8088

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))