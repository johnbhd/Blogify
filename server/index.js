import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import User from './models/User.js';
import router from './routes/auth.js';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', router);

const PORT = process.env.PORT || 3000;

connectDB();
app.get('/', (req, res) => {
  res.send('api is running...')
})

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
})