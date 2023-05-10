import { model } from "mongoose";

import ICampaign from "../interfaces/campaign.interface";
import campaignSchema from "../schemas/campaign.schema";

const CampaignModel = model<ICampaign>("Campaign", campaignSchema);

export default CampaignModel;