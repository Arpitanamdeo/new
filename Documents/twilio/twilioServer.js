
const twilio = require('twilio');

const accountSid = 'ACca76250b8d1917149938846618ea4ca2'; // Your Account SID from Twilio Console
const authToken = 'f3ef263bac61d7fe71fb1bd1f9a84b0c';   // Your Auth Token from Twilio Console

const client = new twilio(accountSid, authToken);

const sendOtp = (phoneNumber, otp) => {
  return client.messages.create({
    body: `Your OTP is ${otp}`,  // The message content
    from: '+16814484431', // Your Twilio Phone Number
    to: phoneNumber                // Recipient's Phone Number
  });
};

module.exports = sendOtp;