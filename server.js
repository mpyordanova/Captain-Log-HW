const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

const LogModel = require("./models/logs")
// const {schema} = require('/models/logs')
const logRouter = require('./routes/createLog')
const indexRouter = express.Router() 

// DO I NEED THIS IN SERVER.JS FILE SINCE I HAVE IT IN THE OTHER FILES??????????????????????????????????????
const createLog = require("./routes/createLog")
const seedRouter = require('./models/logs')

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
server.use('/seed', seedRouter)
server.use('/', indexRouter)

// index route so respond will show the full list of captain's log
server.get('/index/:id', (req, res)=>{
    const found = LogEntry = 
   res.status(200).json(LogEntry)
})

// Delete route
server.delete('/', (req, res)=>{
    res.status(200).json({message:'Deleted'})
})

// put route 

// routes.Do we need it????????????????????????????????????????????????
server.get("/", (req, res) =>{
    res.status(200).json({message:"Hi there!"})
})

server.listen(PORT, ()=>{
    mongoConfig()
    console.log(`Server is listening at ${PORT}`)
})