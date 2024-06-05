import mongoose from 'mongoose';
import Request from './models/Request.js';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    importRequests();
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

const importRequests = async () => {
    try {
        const data = JSON.parse(fs.readFileSync('../requests.json', 'utf-8'));
        await Request.insertMany(data);
        console.log('Data imported successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error importing data:', error.message);
        mongoose.connection.close();
    }
};
