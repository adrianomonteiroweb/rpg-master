import { model } from "mongoose";

import IMonster from "../interfaces/monster.interface";
import monsterSchema from "../schemas/monster.schema";

const MonsterModel = model<IMonster>("Monster", monsterSchema);

export default MonsterModel;