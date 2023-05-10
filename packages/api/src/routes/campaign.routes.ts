import express from "express";

const campaignRouter = express.Router();

campaignRouter.get("/campaign", (_req, res) => res.status(200).json({ title : "Assaid" }));

export default campaignRouter;