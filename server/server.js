import messageRoutes from './routes/message.route.js';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/messages', messageRoutes);

app.get('/', (req, res) => {
  res.send('Test route');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
