const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const { createContactMe } = require("../../controllers/mail.controllers.js");


router.post("/contact-me", [createContactMe]);
router.get("/", (req, res, next) => {
    res.json({
        status: 200,
        data: {
            message: "calling get api"
        }
    })
});

module.exports = router;
