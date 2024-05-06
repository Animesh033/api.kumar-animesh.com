const nodemailer = require('nodemailer')

exports.sendEmail = async (data) => {
    // console.log(data)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS,
        },
    });

    const mail = {
        from: '"' + data.name + ' 👻" <' + data.email + '>', // sender address
        to: process.env.MAILTRAP_MAIL_TO, // list of receivers
        subject: data.subject, // Subject line
        text: data.message, // plain text body
        html: "<b>" + data.message + "</b>", // html body
    }

    try {
        // send mail with defined transport object
        const info = await transporter.sendMail(mail);

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

    } catch (error) {
        // console.log(
        //     "Email service failed silently. Make sure you have provided your MAILTRAP credentials in the .env file"
        // );
        console.log("Error: ", error);
    }

}

