const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yurdoy@gmail.com",
    pass: "12345",
  },
});

let mailOptions = {
  from: "yurdoy@gmail.com",
  to: "yuriydoychev@proton.me",
  subject: "Test Email",
  text: "Hello from Node.js and nodemailer!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Email sent:", info.response);
});
