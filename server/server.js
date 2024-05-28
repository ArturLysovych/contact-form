import messageRoutes from './routes/message.route.js';
import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use('/messages', messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
