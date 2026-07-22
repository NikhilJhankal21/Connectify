import express from 'express';
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors';

const app=express();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware()) 

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is healthy'  });
});

export default app;