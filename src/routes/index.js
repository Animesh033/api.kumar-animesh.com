// var express = require("express");
import express from 'express'
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", {
  //   title: "API server is runnng...",
  //   message: "API development!",
  // });
  res.json({
    title: "API server is runnng...",
    message: "API development!",
  })
});

// module.exports = router;
export default router
