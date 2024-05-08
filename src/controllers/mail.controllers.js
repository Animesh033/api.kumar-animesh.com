// const { sendEmail } = require('../utils/mail')

import { sendEmail } from '../utils/mail.js';

export const createContactMe = async (req, res, next) => {

    const data = req?.body || {}

    if (Object.keys(data).length === 0) {
        res.json({
            message: "Message not sent successfully!"
        });
    }
    else {
        await sendEmail(data);

        res.json({
            message: "Message sent successfully!"
        });
    }

}




/*
=========== COMMON JS WAY ============

exports.createContactMe = (req, res) => {
    res.json({
        msg: req.body,
    });
}

/*
=========== WHEN USING MODULE TYPE ============

const createContactMe = (req, res) => {
    res.json({
        msg: req.body,
    });
}

export {createContactMe}
*/