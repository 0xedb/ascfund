import crypto from 'crypto';
import nodeMailer from 'nodemailer';

const sendmail = async (email: string) => {
  const code = crypto.randomBytes(10).toString('hex');
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.FUNDUS_USER,
      pass: process.env.FUNDUS_PASS,
    },
  });

  let mailOptions = {
    from: '"FundUs 👻" <fundus.flask@gmail.com>',
    to: email,
    subject: 'Login Code ✔',
    text: `Code: ${code}`,
    html: `Code: <h3>${code}</h3>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error);
    console.log('Message sent: %s', info.messageId);
  });
};

export {sendmail};
