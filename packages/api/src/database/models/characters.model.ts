import { model } from "mongoose";

import ICharacter from "../interfaces/character.interface";
import characterSchema from "../schemas/character.schema";

const CharacterModel = model<ICharacter>("Character", characterSchema);

export default CharacterModel;