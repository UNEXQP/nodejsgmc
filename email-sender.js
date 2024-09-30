// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'anfelarotimi10@gmail.com', // Your email address
        pass: 'ROTIMI R10' // Your email password or app-specific password
    }
});

// Set up email data
const mailOptions = {
    from: 'anfelarotimi10@gmail.com', // Sender address
    to: 'rotimianfela473@gmail.com', // List of recipients
    subject: 'Hello from Node.js', // Subject line
    text: 'This is a test email sent from Node.js!', // Plain text body
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent successfully:', info.response);
});
