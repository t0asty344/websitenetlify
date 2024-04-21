const nodemailer = require('nodemailer');


module.exports = async (req, res) => {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'toastytester1@gmail.com',
    pass: 'ybsk dvhv jycs uzio'
  }
});

var Vorname=document.getElementById("vorname").value
var Nachname=document.getElementById("nachname").value
var Email_user=document.getElementById("email").value
var Nachricht=document.getElementById("Nachricht").value


var mailOptions = {
  from: 'toastytester1@gmail.com',
  to: 'toasty344@gmail.com',
  subject: 'Neuer Termin',
  text: "Vorname"+Vorname+"Nachname"+Nachname+"Email"+Email_user+'Nachricht'+Nachricht,
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
