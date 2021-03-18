// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// set up hotel schema

const hotelSchema = new Schema({
    name: {type: String, required: true, unique: true},
    location: String,
    rating: {type: Number, max: 5},
    vacancies: Boolean,
    tags: [String],
    rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ],
},     
{timestamps: true})

const Hotel = mongoose.model('Hotel', hotelSchema)


// Export the model
module.exports = Hotel
