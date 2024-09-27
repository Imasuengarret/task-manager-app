const mongoose = require('mongoose');


const FoodSchema = new mongoose.Schema({
    id: 1,
    name: ' Nike Dunk',
    price: 99.35,
    image: './public/images/image1.png',
    category: 'shoes',
    status: 'best seller'

})
module.exports = mongoose.model('Food', FoodSchema)