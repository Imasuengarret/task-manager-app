const Task = require('../Models/task')

const getAllTasks = async (req, res)=>{
    try {
        const task = await Task.find({})
        res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
    // res.send('All Task')
}

const getATask = async (req, res) =>{
    try {
        const _id = req.params.id;
        const task = await Task.findById(_id)
        res.status(200).json({task})
        if (!task){
            console.log('task not found')
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
    // res.send('A Task')
}
const updateTask =async (req, res) =>{
    try {
        const _id = req.params.id
        const task = await Task.findByIdAndUpdate({_id}, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message})
    }

    // res.send('updateTAsk')
}
const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
    // res.send('createTask')
}

const deleteTAsk =  async (req, res) =>{
    try {
        const _id = req.params.id
        const task = await Task.findByIdAndDelete(_id)
        res.status(200).json('Deleted Succesfully')
    } catch (err) {
        res.status(400).json({error: err.message}) 
    }
} 

module.exports=  {getAllTasks, getATask, updateTask, createTask, deleteTAsk}