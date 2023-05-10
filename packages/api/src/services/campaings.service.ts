import ICampaign from "../database/interfaces/campaign.interface";
import { CampaingsRepository } from "../database/repositories/campaing.repository";

export class CampaignsService {
  private readonly _CampaignsRepository = new CampaingsRepository();

  async getAllCampaignsService() {
    const allCampaigns = await this._CampaignsRepository.getAllCampaingsRepository();

    return allCampaigns;
  }

  async createNewCampaignservice(campaign: ICampaign) {
    await this._CampaignsRepository.createNewUserRepository(campaign);
  }
}