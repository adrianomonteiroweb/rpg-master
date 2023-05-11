import IMonster from "../database/interfaces/monster.interface";
import { MonstersRepository } from "../database/repositories/monster.repository";

export class MonstersService {
  private readonly _monstersRepository = new MonstersRepository();

  async getAllMonstersService() {
    const allMonsters = await this._monstersRepository.getAllMonstersRepository();

    return allMonsters;
  }

  async createNewMonsterService(Monster: IMonster) {
    await this._monstersRepository.createNewMonsterRepository(Monster);
  }
}