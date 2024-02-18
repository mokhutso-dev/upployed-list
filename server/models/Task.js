const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    id: String,
    description: String,
})

const taskModel = mongoose.model("task", TaskSchema)

module.exports = taskModel