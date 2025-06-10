import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import User from './models/User.js';
import router from './routes/auth.js';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import session from 'express-session';
import './services/passport.js';
import cookieParser from 'cookie-parser';
import {authMiddleware} from './middleware/authMiddleware.js'

dotenv.config();

const app = express();

app.use(cookieParser());
const PORT = process.env.PORT || 3000;
connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));

app.use(express.json());

app.use(session({
  secret: process.env.COOKIE_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'You are authorized', user: req.user});
});

app.use('/api/auth', router);

app.get('/', (req, res) => {
  res.send('api is running...')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
})