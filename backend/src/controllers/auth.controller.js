const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check client side data
        if (!email || !password) {
            return res.status(400).send({
                code: "400",
                message: "Incompete Credentials",
            });
        }

        // check if user exists or not
        const user = await User.findOne({
            email: email,
        });

        // if user not found
        if (!user) {
            return res.status(400).send({
                code: "400",
                message: "User does not exists",
            });
        }

        // verify credentials
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(404).send({
                code: "404",
                message: "Invalid Credentials",
            });
        }

        // if credentials match
        const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '8h' });
        return res.status(200).send({
            code: "200",
            message: "Login Successfull",
            token,
        });
    }
    catch (error) {
        return res.status(500).send({
            code: "500",
            message: "Internal Server Error",
            error: error.message,
        })
    }
};

exports.register = async (req, res) => {
    try {
        const { name, email, password, age, userType, profilePicture } = req.body;

        // client side data validation
        if (!name || !email || !password || !age) {
            return res.status(400).send({
                code: "400",
                message: "Incomplete Details",
            });
        }

        // check if user already exists
        const user = await User.findOne({
            email: email,
        });
        if (user) {
            return res.status(400).send({
                code: "400",
                message: "User already exists",
            });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 5);

        // register the user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            age,
            userType,
            profilePicture,
        });
        newUser.save();
        return res.status(201).send({
            code: "201",
            message: "User created Successfully",
        });
    }
    catch (error) {
        return res.status(500).send({
            code: "500",
            message: "Internal Server Error",
            error: error.message,
        });
    }
};