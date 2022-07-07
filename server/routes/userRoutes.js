const jwt = require('jsonwebtoken');
const express = require('express');
const User = require('../model/userSchema')
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is Home Page')
})

router.post('/register', async (req, res) => {
    const { name, email, Phone, work, password, cpassword } = req.body;

    if (!name || !email || !Phone || !work || !password || !cpassword) {
        res.status(422).send({ error: "fill all things" })
    }


    try {
        const userExsit = await User.findOne({ email: email });

        if (userExsit) {
            res.send("this email already exit");
        }
        if (password == cpassword) {
            const user = new User({
                name,
                email,
                Phone,
                work,
                password,
                cpassword,
            })
            //console.log(user);

            await user.save();
            res.send("user register succesfully")
        }
        else {
            res.send("password and cpassword not match")
        }
    } catch (err) {
        console.log(err);
    }

})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.send("fill all things");
    }

    try {
        const user = await User.findOne({ email });

        const isMatch = await bcrypt.compare(password, user.password);

        const token = await user.generateAuthToken();

        res.cookie('jwtoken', token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        })

        //console.log(token);

        if (user) {
            if (isMatch) {
                res.send("user login succesfully");
            } else {
                res.send("invailid credential error")
            }
        } else {
            res.send("email not exit")
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
