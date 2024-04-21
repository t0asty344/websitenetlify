const nodemailer = require('nodemailer');


module.exports = async (req, res) => {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'toastytester1@gmail.com',
    pass: 'ybsk dvhv jycs uzio'
  }
});

var mailOptions = {
  from: 'toastytester1@gmail.com',
  to: 'toasty344@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};



try {
  // Send the email
  await transporter.sendMail(mailOptions);
  res.status(200).send('Email sent successfully.');
} catch (error) {
  console.error('Error sending email:', error);
  res.status(500).send('An error occurred while sending the email.');
}
};
