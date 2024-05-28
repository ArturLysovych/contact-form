import MessageController from '../controllers/message.controller.js';
import express from 'express';

const router = express.Router();
const messageController = new MessageController();

router.get('/', (req, res) => { res.json({ message: 'message routes here' });});
router.post('/send-message', (req, res) => messageController.sendMessage(req, res));

export default router;