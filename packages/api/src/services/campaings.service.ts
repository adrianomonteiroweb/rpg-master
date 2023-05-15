import ICampaign from "../database/interfaces/campaign.interface";
import { CampaingsRepository } from "../database/repositories/campaing.repository";

export class CampaignsService {
  private readonly _CampaignsRepository = new CampaingsRepository();

  async getAllCampaignsService() {
    const allCampaigns = await this._CampaignsRepository.getAllCampaingsRepository();

    return allCampaigns;
  }

  async createNewCampaignservice(campaign: ICampaign) {
    return await this._CampaignsRepository.createNewCampaignRepository(campaign);
  }

  async updateCampaignService(campaignID: string, campaign: ICampaign) {
    return await this._CampaignsRepository.updateCampaignRepository(campaignID, campaign);
  }
}