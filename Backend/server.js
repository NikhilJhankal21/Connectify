import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import { connectDB } from './src/lib/db.js';
import job from './src/lib/cron.js';

const PORT = process.env.PORT || 3000;

connectDB();

if(process.env.NODE_ENV !== 'production') job.start();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});