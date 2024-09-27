const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'pleae enter a name'],
        trim: true,
        maxlength: [20, 'name cnnot exceed 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = {Task}