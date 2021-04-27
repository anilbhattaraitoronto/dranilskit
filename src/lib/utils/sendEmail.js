import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

// import { google } from 'googleapis';



export function sendRegistrationActivationGmail  (
    senderDetail, secret, user
)  {
    //CREATE TRANSPORT 
    const transporter = nodemailer.createTransport(senderDetail);
    //CREATE TOKEN 
    const token = jwt.sign(user, secret);
    //DEFINE ACTIVATION URL
   
    
    const activationUrl = process.env.NODE_ENV === 'production' ? `https://dr-anil.com/accounts/activate/${token}` : `http://localhost:3000/accounts/activate/${token}`
    
    //CREATE EMAIL OPTIONS OBJECT
    const options = {
        from: "no-reply@email.com",
        to: user.email,
        subject: `Please confirm your account registration`,
        html: `Please confirm your registration by clicking the link: <a href="${activationUrl}">${activationUrl}</a>`,
    };
    //SEND MAIL WITH TRANSPORTER
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info.response);
        }
    })
}

export function sendPasswordResetGmail  (senderDetail, userEmail, secret) {
    const transporter = nodemailer.createTransport(senderDetail);
    const token = jwt.sign({ email: userEmail }, secret, { expiresIn: "5m" });


  
    const passwordResetLink = process.env.NODE_ENV === 'production' ? `https://dr-anil.com/accounts/passwordresetlink/${token}` : `http://localhost:3000/accounts/passwordresetlink/${token}`;
    const options = {
      from: "no-reply@email.com",
      to: userEmail,
      subject: "Go to reset your password",
      html:
        `<p> Please click the link to go to password reset form. <a href="${passwordResetLink}" >${passwordResetLink}</a>  </p>`,
    };
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info.response);
      }
    });
};
  
