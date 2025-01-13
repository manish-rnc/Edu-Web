const mongoose = require('mongoose');

const connectDB = async () => {
    const DB_URL = process.env.DB_URL
    const DB_NAME = process.env.DB_NAME
    // const connectionString = `${DB_URL}${DB_NAME}`;
    const connectionString = "mongodb://localhost:27017/edu_db";
    try { 
        await mongoose.connect(connectionString);
        console.log('Database connected successfully');
    }   
    catch(error) {
        console.log('Unable to connect to database\n' + error);
    }
}

module.exports = connectDB;
