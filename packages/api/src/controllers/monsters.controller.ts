import { Request, Response } from 'express';

import { MonstersService } from '../services/monsters.service';

export class MonstersController {
  private readonly _service = new MonstersService();

  async getAllMonstersController(_req: Request, res: Response): Promise<Response> {
    let allMonsters;

    try {
      allMonsters = await this._service.getAllMonstersService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allMonsters);
  }

  async createNewMonsterController(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      await this._service.createNewMonsterService(req.body);

      return res.status(200).json({ message: 'Monster created successfully' });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}