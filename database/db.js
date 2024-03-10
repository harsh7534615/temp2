import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    
    const MONGODB_URI = `mongodb+srv://hy7534615:1234567890@mern-todo.vhdkcn1.mongodb.net/`;
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;