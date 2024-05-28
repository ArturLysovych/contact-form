import { IConvertInfoToMailProps } from '../interfaces';

export const convertInfoToMail = ({ userName, email, projectInfo }: IConvertInfoToMailProps): string => {
    const mailContent = `
        👤 Customer Name: ${userName}
        <br>
        ✉️ Email: ${email}
        <br>
        ℹ️ Project Info: ${projectInfo}
    `;

    return mailContent;
};

export const postRequest = async (data: string) => {
    try {
        const response = await fetch('http://localhost:5000/messages/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: data })
        });

        console.log(response.json());

        return await response.json();
    } catch (error) {
        console.error('There was an error:', error);
    }
};