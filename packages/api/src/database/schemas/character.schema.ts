import { Schema } from "mongoose";

import ICharacter from "../interfaces/character.interface";

const characterSchema = new Schema<ICharacter>({
    name: { type: String, required: true },
    class: { type: String, required: true },
    player: { type: String, required: true },
    pv: { type: Number },
    totalPv: { type: Number },
    ca: { type: Number },
    negativePV: { type: Number },
    classPowers: { type: String }
});

export default characterSchema;