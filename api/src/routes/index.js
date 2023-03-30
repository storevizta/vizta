import { Router } from "express";

import example from "./example.js";

const router = Router();

router.use("/example", example);

export default router;
