const { sendOTPEmail } = require('./utils/email.js'); 

const testSendEmail = async () => {
  const recipientEmail = 'reciever@example.com'; 
  const otp = '123456'; 
  const userEmail = 'yourEmail@gmail.com';
  const userPassword = 'Yashg@9876543'; 

  try {
    await sendOTPEmail(recipientEmail, otp, userEmail, userPassword);
    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Error during test email:', error);
  }
};

testSendEmail();
