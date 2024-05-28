export function getMailOptions(info) {
    return {
        from: 'Customer',
        to: process.env.EMAIL,
        subject: 'Contact-Form message',
        html: `
            <h2>Message from customer:</h2>
            <p>${info}</p>`
    }
};