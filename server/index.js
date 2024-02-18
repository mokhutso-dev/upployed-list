require('dotenv').config()
const express = require("express")

const dbConnect = require("./config/dbConnect")
const taskModel = require("./models/Task")

const app = express()
const port = process.env.PORT || 3000

dbConnect()

app.listen(port, () =>{
    console.log(`Server is up and running on port ${port}`)
})