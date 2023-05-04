import nodemailer from 'nodemailer';

const userOrigin = process.env.CLIENT_ORIGIN || '';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

const send = ({email, subject, html}) => {
    return transporter.sendMail({
        from: 'Auth API',
        to: email,
        subject,
        text: '',
        html,
    });
};

const sendActivalionLink = (email, token) => {
    const link = `${userOrigin}/auth/activation/${token}`;

    return send({
        email,
        subject: 'Account activation',
        html: `
      <h1>Account activation</h1>
      <a href="${link}">${link}</a>
      <p>Note: This is an automated message, please do not reply to it</p>
      <p>The activation link will be active only for 30 minutes</p>
    `,
    });
};

const sendPasswordResetLink = (email, token) => {
    const link = `${userOrigin}/auth/reset-password/${token}`;

    return send({
        email,
        subject: 'Password reset',
        html: `
      <h1>Password reset</h1>
      <a href="${link}">${link}</a>
      <p>Note: This is an automated message, please do not reply to it</p>
      <p>The reset link will be active only for 30 minutes</p>
    `,
    });
};

const sendEmailChangeNotification = (email) => {
    return send({
        email,
        subject: 'Auth App',
        html: `
      <h1>Auth app notification</h1>
      <p>This email is not using for auth app from now</p>
    `,
    });
};

export default {
    send,
    sendActivalionLink,
    sendPasswordResetLink,
    sendEmailChangeNotification,
};
