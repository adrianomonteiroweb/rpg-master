import { Request, Response } from 'express';

import { CampaignsService } from '../services/campaings.service';

export class CampaignsController {
  private readonly _service = new CampaignsService();

  async getRPGMasterController(_req: Request, res: Response): Promise<Response> {
    let rpgMaster = {
      message: "RPG Master"
    };

    try {
      return res
        .status(200)
        .json(rpgMaster);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

  }

  async getAllCampaignsController(_req: Request, res: Response): Promise<Response> {
    let allCampaigns;

    try {
      allCampaigns = await this._service.getAllCampaignsService();
    } catch (error: any) {
      return res
        .header('Access-Control-Allow-Origin', '*')
        .status(500).json({ message: error.message });
    }

    return res.status(200).json(allCampaigns);
  }

  async createNewUserController(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      await this._service.createNewCampaignservice(req.body);

      return res
        .header('Access-Control-Allow-Origin', '*')
        .status(200).json({ message: 'Campaign created successfully' });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}