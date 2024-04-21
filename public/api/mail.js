const nodemailer = require('nodemailer');


function sendmail(){
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



  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
sendmail()