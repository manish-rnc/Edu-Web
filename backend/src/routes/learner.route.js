import express from 'express';
import { register, login } from '../controllers/learner.controller.js';

const learnerRouter = express.Router();

learnerRouter.post('/register', register);
learnerRouter.post('/login', login);

export default learnerRouter;
