const express = require('express');
const auth = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/auth/register', auth.register);
authRouter.post('/auth/login', auth.login);

module.exports = authRouter;
