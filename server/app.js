const dotenv = require('dotenv');
const express = require('express');
dotenv.config({ path: './.env' });
require('./db/conn');
const UsersRoutes = require('./routes/userRoutes')


const app = express();

app.use(express.json())

app.use('/user', UsersRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server is started on ${process.env.PORT}`)
})