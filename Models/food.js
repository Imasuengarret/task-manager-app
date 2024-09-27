const mongoose = require('mongoose');




const FoodSchema = new mongoose.Schema({
    id: 1,
    name: ' Nike Dunk',
    price: 99.35,
    image: './public/images/image1.png',
    category: 'shoes',
    status: 'best seller'

})


const SchSchema = new mongoose.Schema({
    name: {
        type: "string",
        length: [20, 'not more than 20 characters']
    }
})
module.exports = mongoose.model('Food', FoodSchema)