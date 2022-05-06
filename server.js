const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

const LogModel = require("./models/logs")
// const {schema} = require('/models/logs')
const logRouter = require('./routes/createLog')

const createLog = require("./routes/createLog")

const mongoConfig = require ("./config")
require("dotenv").config()
const server = express()
const PORT = process.env.PORT || 3000


server.use(cors("*"))
server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

server.use('/createLog', logRouter)





server.get("/", (req, res) =>{
    res.status(200).json({message:"Hi there!"})
})

server.listen(PORT, ()=>{
    mongoConfig()
    console.log(`Server is listening at ${PORT}`)
})