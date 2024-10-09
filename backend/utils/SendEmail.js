import nodemailer from "nodemailer";
import mailgun from "mailgun-js";


export const sendMail = async (email, name, uniqueString) => {
    const Transport = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth: {
            user: "enegxi@gmail.com", 
            pass: "xDh4v7JcTPn2ZXK8",
          },
    })

    // const sender = "Jobcy Support"
    const mailOptions = {
        subject: "Jobcy Email Verification",
        from: "support@jobcy.com",
        to: `${email}`,
        html: `Welcome ${name}!! We are excited you joined us.  Kindly CliCk on the Link http://localhost:3000/auth/verify/${uniqueString} to verify your account`
    }

    Transport.sendMail(mailOptions, (err) => {
        if (err) {
            throw err; 
        }
        console.log("Message Sent Successfully")
    })
}