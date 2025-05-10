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

app.get('/test', async(req, res) => {
  try {
    const userExist = await User.findOne({email: "hello@gmail.com"});

    if (userExist) {
      return res.status(400).json({ message: "user exisited" });
    }
    
    const newUser = new User({ email: "hello@gmail.com", password: "1233456"});
    await newUser.save();
    
    res.json(newUser);
  } catch (error) {
    console.log('error:', error);
  }

});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
})