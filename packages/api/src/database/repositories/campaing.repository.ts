import ICampaign from "../interfaces/campaign.interface";
import CampaignModel from "../models/compaigns.model";

export class CampaingsRepository {
  private readonly _CampaingsModel = CampaignModel;

  async getAllCampaingsRepository() {
    const allCampaings = await this._CampaingsModel.find();

    return allCampaings;
  }

  async createNewUserRepository(user: ICampaign | any) {
    await this._CampaingsModel.create(user);
  }

  async getIdByUserEmailRepository(email: string) {
    const idByUserEmail = await this._CampaingsModel.findOne({ where: { email } });

    return idByUserEmail?.id ? idByUserEmail?.id : false;
  }
}