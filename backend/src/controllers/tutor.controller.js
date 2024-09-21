import Tutor from "../models/tutor.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Subject from "../models/subject.model.js";

export const register = async (req, res) => {
    const { name, email, password, qualification } = req.body;
    try {
        const tutor = await Tutor.findOne({ email });
        if (tutor) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const securePassword = await bcrypt.hash(password, 5);
        const newTutor = new Tutor({ name: name, email: email, password: securePassword, qualification: qualification });
        await newTutor.save();
        res.status(201).json({ message: 'Successfully registered' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const tutor = await Tutor.findOne({ email });
        if (!tutor) {
            return res.status(400).json({ error: 'User does not exists' });
        }
        const passwordMatch = await bcrypt.compare(password, tutor.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid Credentials' });
        }
        const token = jwt.sign({ tutorId: tutor._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addSubject = async (req, res) => {
    const { subjectName, description, tutorId } = req.body;
    console.log(req.user);
    try {   
        const subject = await Subject.findOne({ tutor: tutorId, name: subjectName });
        if(subject) {
            return res.status(400).json({ error: 'This Subject already exists' });
        }
        const newSubject = new Subject({ name: subjectName, description: description, tutor: tutorId });
        await newSubject.save();
        return res.status(200).json({ message: "Subject added successfully" });
    }   
    catch(error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllSubjects = async (req, res) => {
    const tutorId = req.tutor;
    try {
        const subjects = await Subject.find({ tutor: tutorId });
        return res.status(200).json(subjects);
    }
    catch(error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateSubject = async (req, res) => {
    const { id } = req.params;
    const { subjectName, description, tutorId } = req.body;
    try {
        const subject = await Subject.findOneAndUpdate({_id: id, tutor: tutorId}, { name: subjectName, description: description, tutor: tutorId }, { new: true });
        if(!subject) {
            return res.status(404).json({ error: 'Subject does not exist !' });
        }
        return res.status(200).json(subject);
    }
    catch(error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteSubject = async (req, res) => {
    const { id } = req.params;
    const { tutorId } = req.body;
    try {
        const subject = await Subject.findOneAndDelete({_id: id, tutor: tutorId});
        if(!subject) {
            return res.status(404).json({ error: 'Subject does not exist !' });
        }
        return res.status(200).json({ message: 'Subject is deleted successfully' });
    }
    catch(error) {
        res.status(500).json({ error: error.message });
    }
};

