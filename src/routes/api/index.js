const express = require("express");
// const nodemailer = require("nodemailer");
const router = express.Router();

const { createContactMe } = require("../../controllers/mail.controllers.js");


router.post("/contact-me", [createContactMe]);
router.get("/", (req, res, next) => {
    // res.render("index", {
    //     title: "API server is runnng...",
    //     message: "API development => /api/v1",
    // });
    res.json({
        title: "API server is runnng...",
        message: "API development => /api/v1",
    })
});

module.exports = router;
