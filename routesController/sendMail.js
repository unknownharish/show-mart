const nodemailer = require('nodemailer');
require('dotenv').config();




exports.sendMail = async(req) => {

    console.log(req.body)

    const transport = nodemailer.createTransport({

        service: process.env.service,
        auth: {

            user: process.env.user1,
            pass: process.env.pass1

        }

    });

    const data = {
        to: req.body.email,
        from: process.env.from,
        subject: 'Shows list',
        Text: req.body.shows

    }

    let response1 = await transport.sendMail(data, (err) => {
        console.log(err)
    });
    // console.log(response1);

    return response1;

}