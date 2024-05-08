// require('dotenv').config()
import 'dotenv/config'
import createError from 'http-errors';
// var createError = require("http-errors");
// var express = require("express");
import express from 'express'
// var path = require("path");
import path from 'path'
// var cookieParser = require("cookie-parser");
import cookieParser from 'cookie-parser';
// var logger = require("morgan");
import logger from 'morgan'
// const helmet = require("helmet");
import helmet from 'helmet'
// var cors = require("cors");
import cors from 'cors'
// var bodyParser = require("body-parser");

import bodyParser from 'body-parser';
import serverless from "serverless-http";

import { fileURLToPath } from 'url';

import ejs from 'ejs'
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// const apisRouter = require("./routes/api/index");

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import apisRouter from './routes/api/index.js'

// const serverless = require("serverless-http");


var app = express();

app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
// console.log("URL : ", import.meta.url)
// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory
// console.log(process.cwd(), __dirname, path.join(process.cwd(), "src/views"))

// app.set("views", path.join(process.cwd(), "src/views"));
// app.set("view engine", "ejs");
// app.engine('ejs', ejs.__express);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("../public"));

app.use("/", indexRouter);
// app.use("/users", usersRouter);

const router = express.Router();

router.get("/api/v1", (req, res, next) => {
  res.json({
    status: 200,
    message: "API server is running..."
  })
});

router.use('/.netlify/functions/index/', router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

// Allow cross-origin.....
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

// module.exports = app;

// module.exports.handler = serverless(app);
export default app
export const handler = serverless(app);
