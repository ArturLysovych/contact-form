import { transporter } from '../constants/index.js';
import { getMailOptions } from '../utils/index.js';

export default class MessageController {
    async sendMessage(req, res) {
        try {
            const { message } = req.body;
            
            await transporter.sendMail(getMailOptions(message));
            return { message: 'message was sent' };
        } catch (error) {
            console.error(error);
            return { error: 'message was not sent' };
        }
    }
}