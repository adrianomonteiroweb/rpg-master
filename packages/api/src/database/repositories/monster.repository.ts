import IMonster from "../interfaces/monster.interface";
import MonsterModel from "../models/monsters.model";

export class MonstersRepository {
  private readonly _monstersModel = MonsterModel;

  async getAllMonstersRepository() {
    const allMonsters = await this._monstersModel.find();

    return allMonsters;
  }

  async createNewMonsterRepository(Monster: IMonster | any) {
    await this._monstersModel.create(Monster);
  }
}