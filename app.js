const express = require('express');
const app = express();
const mongoose = require('mongoose');



// import dotenv
require('dotenv').config();

const db = require('./DB/connect').Mongo_URL

mongoose.connect(db, {dbName: 'task-manager-app'})
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.error(err));



app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))


app.listen(8000, ()=> {
    console.log('port is listening @ 8000') 
})

