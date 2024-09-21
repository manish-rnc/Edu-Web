import Learner from '../models/learner.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
    const { name, email, password, qualification } = req.body;
    try {
        const learner = await Learner.findOne({ email }); 
        if (learner) {
            return res.status(400).json({ error: 'User already exists' });
        } 
        const securePassword = await bcrypt.hash(password, 5);
        const newLearner = new Learner({ name: name, email: email, password: securePassword });
        await newLearner.save();
        res.status(201).json({ message: 'Successfully registered' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const learner = await Learner.findOne({ email });
        if (!learner) {
            return res.status(400).json({ error: 'User does not exists' });
        }
        const passwordMatch = await bcrypt.compare(password, learner.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid Credentials' });
        }
        const token = jwt.sign({ learnerId: learner._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { register, login };
