const Task = require('../Models/task')

const getAllTasks = (req, res)=>{
    res.send('All Task')
}

const getATask = (req, res) =>{
    res.send('A Task')
}
const updateTask = (req, res) =>{
    res.send('updateTAsk')
}
const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const deleteTAsk = (req, res) =>{
    res.send('delete task')
} 

module.exports=  {getAllTasks, getATask, updateTask, createTask, deleteTAsk}