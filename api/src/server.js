import dotenv from "dotenv";

dotenv.config();

import express from "express";

import cookieParser from "cookie-parser";

import bodyParser from "body-parser";

import cors from "cors";

import router from "./routes/index.js";

import { sequelize } from "./database.js";

const server = express();

const port = process.env.PORT || 3001;

server.use(cookieParser());

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

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Synchronized tables");
    server.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((error) => console.log(error.message));
