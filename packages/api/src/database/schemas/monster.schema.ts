import { Schema } from "mongoose";

import IMonster from "../interfaces/monster.interface";

const monsterSchema = new Schema<IMonster>({
    name: { type: String, required: true },
    iniciative: { type: String, required: true },
    ca: { type: Number, required: true },
    pvs: { type: Number },
    damage: { type: Number }
});

export default monsterSchema;