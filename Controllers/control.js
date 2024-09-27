const task = require('../Models/task')
const getAllTasks = (req, res)=>{
    res.send('All Task')
}

const getATask = (req, res) =>{
    res.send('A Task')
}
const updateTask = (req, res) =>{
    res.send('updateTAsk')
}
const createTask =(req, res) =>{
    res.send('create(Post) task')
}
const deleteTAsk = (req, res) =>{
    res.send('delete task')
} 

module.exports=  {getAllTasks, getATask, updateTask, createTask, deleteTAsk}