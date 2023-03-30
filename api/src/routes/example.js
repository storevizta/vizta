import dotenv from "dotenv";

dotenv.config();

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Example");
});

export default router;
