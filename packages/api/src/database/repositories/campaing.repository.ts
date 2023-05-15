import ICampaign from "../interfaces/campaign.interface";
import CampaignModel from "../models/compaigns.model";

export class CampaingsRepository {
  private readonly _CampaingsModel = CampaignModel;

  async getAllCampaingsRepository() {
    return await this._CampaingsModel.find();
  }

  async createNewCampaignRepository(campaign: ICampaign | any) {
    const created = await this._CampaingsModel.create(campaign);

    return created._id;
  }

  async updateCampaignRepository(campaignID: string, campaign: ICampaign | any) {
    await this._CampaingsModel.findByIdAndUpdate(
      {
        _id: campaignID
      },
      {
        ...campaign
      }
    );
  }
}