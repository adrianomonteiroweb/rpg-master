import express from "express";

import { CharactersController } from "../controllers/characters.controller";

const characterRouter = express.Router();

// instances
const useCharacterController = new CharactersController();

characterRouter.get("/character", (_req, res) => useCharacterController.getAllCharactersController(_req, res));

characterRouter.post("/character", (_req, res) => useCharacterController.createNewCharacterController(_req, res));

export default characterRouter;