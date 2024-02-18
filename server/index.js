require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")

const dbConnect = require("./config/dbConnect")
const Task = require("./models/Task")

const app = express()
// app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.listen(port,  () =>{
    console.log()

    console.log(`Server is up and running on port ${port}`)
})

dbConnect()

// Get all data in the coollection
app.get('/api/notes', async (request, response) =>{

    result = await Task.find({})
    response.send(result)
})

app.get('/api/all', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.json(tasks)
        // res.status.json(posts)
    } catch (error) {
        console.log(error)
    }
})

app.post('/api/add', async (req, res) => {
    try {
        const post = await Task.create(req.body)
        // res.status(201).json(post)
        res.status(201).json({
            message: "Success",
            data: post
        })

    } catch (error) {
        console.log(error)
    }
})

app.delete('/api/delete', async (request, response) => {
    const { id } = request.params
    try {
        const find = await Task.findByIdAndDelete(id)
        res.json(find)
    } catch (error) {
        throw new Error(error)
    }
})

app.put('/api/edit', async (req, res) => {
    const { id } = req.params
    try {
        const updatedUser = await User.findByIdAndUpdate(id,
            {
                email: req?.body.email,
                password: req?.body.password,
            },
            { new: true }
        )
        res.json(updatedUser)
    } catch (error) {
        throw new Error(error)
    }
})

app.get('/api/getUser', async (req, res) => {
    const { id } = req.params
    try {
        const getaUser = await Task.findById(id)
        res.json({ getaUser })
    } catch {
        throw new Error(error)
    }
})


// app.post('/api/add', async (request, response) => {
//     await Task.count({}, function (error, numofDocs){
//         collection.insert
//     })

// })