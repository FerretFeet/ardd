import express from "express";
import { createTransport } from "nodemailer";
import cors from "cors";
require("dotenv").config();

const transporter = createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.VITE_SERVER_EMAIL,
    pass: process.env.VITE_SERVER_EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  var mail = {
    from: name,
    to: process.env.VITE_CONTACT_EMAIL,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
