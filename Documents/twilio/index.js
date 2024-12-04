const express = require('express');
const sendOtp = require('./twilioServer'); 
const app = express();
app.use(express.json());

app.post('/send-otp', async (req, res) => {
  const {phoneNumber} = req.body;
  console.log(phoneNumber,"hehehe");
  


  const otp = Math.floor(100000 + Math.random() * 900000);

  try {
    await sendOtp(phoneNumber, otp);
    res.status(200).send({ message: 'OTP sent successfully', otp });
  } catch (error) {
    res.status(500).send({ error: 'Failed to send OTP' });
  }
});

app.listen(1000, () => {
  console.log('Server is running on port 1000');
});


