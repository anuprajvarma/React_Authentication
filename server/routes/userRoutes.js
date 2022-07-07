const express = require('express');
const User = require('../model/userSchema')

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

        const user = new User({
            name,
            email,
            Phone,
            work,
            password,
            cpassword,
        })

        await user.save();
        res.send("user register succesfully")
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

        if (user) {
            res.send("user login succesfully");
        } else {
            res.send("user not exit")
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
