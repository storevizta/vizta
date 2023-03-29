import dotenv from "dotenv";

dotenv.config();

import express from "express";

import bodyParser from "body-parser";

import cors from "cors";

import router from "./routes/index.js";

import { database } from "./sequelize.js";

const server = express();

const port = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());

server.use(cors());

// server.use(cors({
//   origin: "http://example.com"
// }));

server.use("/", router);

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
