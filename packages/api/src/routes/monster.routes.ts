import express from "express";

import { MonstersController } from "../controllers/monsters.controller";

const monsterRouter = express.Router();

// instances
const useMonsterController = new MonstersController();

monsterRouter.get("/monster", (_req, res) => useMonsterController.getAllMonstersController(_req, res));

monsterRouter.post("/monster", (_req, res) => useMonsterController.createNewMonsterController(_req, res));

export default monsterRouter;