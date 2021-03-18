// *******************************************//
// Everything provided to students in markdown start
// *******************************************//
// dot env is a module that loads env variables from a .env file to keep certain data from github
require("dotenv").config()

// Dependencies
const mongoose = require('mongoose')
const Hotel = require('./models/hotel.js')

// Config
const mongoURI = process.env.MONGODBURI

const db = mongoose.connection

const mongoconfig = {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true}
// connect to the database
mongoose.connect(mongoURI, mongoconfig, () => {
    console.log("CONNECTED TO MONGO")
})

// Models
// const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})

// Error / success
db.on('open', () => console.log('Your connection is open.'))
db.on('close', () => console.log('You are disconnected from mongo'))
db.on('error', (error) => console.log(error))

// Hotel.create( hotelSeed, ( err , data ) => {
//     if ( err ) console.log ( err.message )
// console.log( "added provided hotel data" )
// }
// );

// -------------Count the number of hotels----------------
// Hotel.count({} , (err , data)=> {
//     if ( err ) console.log( err.message );
//      console.log ( `There are ${data} hotels in this database` );
//     db.close();    
// });


// -------------Add a hotel to the database----------------
// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data');
//   db.close();
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

// *******************************************//
// Everything provided to students end
// *******************************************//

// ++++++++++let's find all our hotels and console.log them+++++++++++++
Hotel.find({}, 'name' ,(err , data)=> {
        if ( err ) console.log( err.message );
         console.log (data);
        db.close();    
    });