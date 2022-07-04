const express = require('express');

const app = express();

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