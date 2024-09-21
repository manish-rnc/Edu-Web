import express from 'express';
import { register, login, addSubject, getAllSubjects, updateSubject, deleteSubject } from '../controllers/tutor.controller.js';
import isAuthenticated from '../middlewares/auth.middleware.js';

const tutorRouter = express.Router();

tutorRouter.post('/register', register);
tutorRouter.post('/login', login);
tutorRouter.post('/addSubject', isAuthenticated, addSubject);
tutorRouter.get('/subjects', isAuthenticated, getAllSubjects);
tutorRouter.put('/updateSubject/:id', isAuthenticated, updateSubject);
tutorRouter.delete('/deleteSubject/:id', isAuthenticated, deleteSubject);

export default tutorRouter;
