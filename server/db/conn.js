const mongoose = require('mongoose');

const DB = process.env.DataBase;

mongoose.connect(DB).then(() => {
    console.log('connection is succesfully')
}).catch((err) => {
    console.log(err)
})