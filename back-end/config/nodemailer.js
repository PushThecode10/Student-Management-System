import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // STARTTLS
  auth: {
  user: process.env.USER_NAME,
  pass: process.env.PASS_KEY
  },
});

// ✅ Test connection immediately
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Error:', error);
  } else {
    console.log('✅ SMTP is ready to take messages');
  }
});

export default transporter;
