import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
console.log(process.env)
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
console.log(`Example app listening on port http://localhost:${PORT}`);

})
console.log("Loaded DB URI:", process.env.MONGO_URI);