const express = require('express');
const router = express.Router()
// import express from 'express';
const { getAllTasks, getATask, updateTask, createTask, deleteTAsk} = require('../Controllers/control')


// router.get('/', (req, res) =>{
//     res.send('Home page')
// })
// router.get('/:id', (req, res) =>{
//     res.send('Particular Page')
// })

// router.route('/').get

router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getATask).patch(updateTask)
router.route('/:id').delete(deleteTAsk)



module.exports= router
