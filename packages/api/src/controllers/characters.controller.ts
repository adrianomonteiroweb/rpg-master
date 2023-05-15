import { Request, Response } from 'express';
import { CharactersService } from '../services/characters.service';

export class CharactersController {
  private readonly _service = new CharactersService();

  async getAllCharactersController(_req: Request, res: Response): Promise<Response> {
    let allCharacters;

    try {
      allCharacters = await this._service.getAllCharactersService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allCharacters);
  }

  async createNewCharacterController(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const characterID = await this._service.createNewCharacterService(req.body);

      return res.status(200).json({ message: 'Character created successfully', id: characterID });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}