// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.json({ msg: "Hello World!" }));

api.use("/api/v1/", router);

export const handler = serverless(api);
