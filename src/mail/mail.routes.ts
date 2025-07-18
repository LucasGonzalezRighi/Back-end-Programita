import { Router } from "express";
import { handleEnviomail } from "./mail.controller";

const router = Router();

router.post("/send", handleEnviomail);

export default router;