import ICharacter from "../database/interfaces/character.interface";
import { CharactersRepository } from "../database/repositories/character.repository";

export class CharactersService {
  private readonly _CharactersRepository = new CharactersRepository();

  async getAllCharactersService() {
    const allCharacters = await this._CharactersRepository.getAllCharactersRepository();

    return allCharacters;
  }

  async createNewCharacterService(Character: ICharacter) {
    await this._CharactersRepository.createNewCharacterRepository(Character);
  }
}