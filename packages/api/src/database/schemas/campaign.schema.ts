import { Schema } from "mongoose";

import ICampaign from "../interfaces/campaign.interface";

const campaignSchema = new Schema<ICampaign>({
    title: { type: String, required: true },
    subtitle: { type: String, required: true }
});

export default campaignSchema;