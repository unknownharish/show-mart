const express = require('express');



//import sendGrid mail function

const { sendMail } = require('./sendMail');



const router = express.Router();


router.route('/shows').post(async(req, res, next) => {

    let mail_response = await sendMail(req);
    // console.log('mail res:' + mail_response)

    // mail_response ? res.json({ 'error': false }) : res.json({ 'error': true })

    res.json({ 'error': true });
    next();


});



module.exports = router;