const express = require('express');
const mogoose = require('mongoose');
const app = express();

const DB = 'mongodb+srv://anuprajvarma:U7MO9Y7KUltWOHfP@cluster0.smxia.mongodb.net/mernstack?retryWrites=true&w=majority';


mogoose.connect(DB).then(() => {
    console.log('connection is succesfully')
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send('This is Home Page')
})

app.get('/contact', (req, res) => {
    res.send('This is Contact Page')
})

app.get('/about', (req, res) => {
    res.send('This is About Page')
})

app.get('/signin', (req, res) => {
    res.send('This is Signin Page')
})

app.get('/signup', (req, res) => {
    res.send('This is Signup Page')
})

app.listen(3110, () => {
    console.log('server is started on 3110')
})