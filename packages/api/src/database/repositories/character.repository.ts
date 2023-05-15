import ICharacter from "../interfaces/character.interface";
import CharacterModel from "../models/characters.model";

export class CharactersRepository {
  private readonly _CharactersModel = CharacterModel;

  async getAllCharactersRepository() {
    const allCharacters = await this._CharactersModel.find();

    return allCharacters;
  }

  async createNewCharacterRepository(character: ICharacter | any) {
    const created = await this._CharactersModel.create(character);

    return created._id;
  }
}