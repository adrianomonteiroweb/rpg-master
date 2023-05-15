import express from "express";
import cors from "cors";

import { CharactersController } from "../controllers/characters.controller";
import accessControlMiddleware from "../middleware/accessControl.middleware";

const characterRouter = express.Router();

// instances
const useCharacterController = new CharactersController();

characterRouter
    .get("/character",
    accessControlMiddleware,
    (_req, res) => useCharacterController
        .getAllCharactersController(_req, res));

characterRouter
    .options("/character", cors())
    .post("/character",
    accessControlMiddleware,
    (_req, res) => useCharacterController
        .createNewCharacterController(_req, res));

export default characterRouter;