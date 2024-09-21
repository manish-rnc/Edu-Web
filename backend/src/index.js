import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
import tutorRouter from './routes/tutor.route.js';
import learnerRouter from './routes/learner.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/tutor', tutorRouter);
app.use('/api/learner', learnerRouter);

connectDB();

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
