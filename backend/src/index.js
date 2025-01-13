const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../src/config/db.config');
const authRouter = require('./routes/auth.route');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', authRouter);
// app.use('/api', tutorRouter);
// app.use('/api', learnerRouter);

connectDB();

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
