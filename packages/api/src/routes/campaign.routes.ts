import express from "express";

import { CampaignsController } from "../controllers/campaigns.controller";

const campaignRouter = express.Router();

// instances
const useCampaignController = new CampaignsController();

campaignRouter.get("/campaign", (_req, res) => useCampaignController.getAllCampaignsController(_req, res));

campaignRouter.post("/campaign", (_req, res) => useCampaignController.createNewUserController(_req, res));

export default campaignRouter;