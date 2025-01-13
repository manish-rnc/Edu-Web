const express = require('express');
const tutor = require('../controllers/tutor.controller');
const verifyToken = require('../middlewares/auth.middleware');

const tutorRouter = express.Router();

// subjects routes
tutorRouter.get('/tutor/subject/get', verifyToken, tutor.getAllSubjects);
tutorRouter.post('/tutor/subject/add', verifyToken, tutor.addSubject);
tutorRouter.post('/tutor/subject/edit', tutor.editSubject);
tutorRouter.post('/tutor/subject/delete', verifyToken, tutor.deleteSubject);

module.exports = tutorRouter;
