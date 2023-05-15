import express from "express";
import cors from "cors";

import { CampaignsController } from "../controllers/campaigns.controller";
import accessControlMiddleware from "../middleware/accessControl.middleware";

const campaignRouter = express.Router();

// instances
const useCampaignController = new CampaignsController();

// Campaigns
campaignRouter
  .get(
    "/",
    accessControlMiddleware,
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
  .options("/campaign", cors())
  .post(
    "/campaign",
    accessControlMiddleware,
    (_req, res) => useCampaignController
      .createNewCampaignController(_req, res));

export default campaignRouter;