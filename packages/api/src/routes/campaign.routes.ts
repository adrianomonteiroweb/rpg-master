import express from "express";

import { CampaignsController } from "../controllers/campaigns.controller";
import accessControlMiddleware from "../middleware/accessControl.middleware";

const campaignRouter = express.Router();

// instances
const useCampaignController = new CampaignsController();

// Campaigns
campaignRouter
  .get(
    "/",
    (_req, res) => useCampaignController
      .getRPGMasterController(_req, res)
  );

campaignRouter
  .get(
    "/campaign",
    accessControlMiddleware,
    (_req, res) => useCampaignController
      .getAllCampaignsController(_req, res));

campaignRouter
  .post(
    "/campaign",
    accessControlMiddleware,
    (_req, res) => useCampaignController
      .createNewUserController(_req, res));

export default campaignRouter;