import ICharacter from "../../utils/interfaces";
import InputComponent from "../inputs-components/InputComponent";

import "./characterComponent.css";

function CharacterComponent({ character, setCharacters }: ICharacter) {
  return (
    <tr className="character-tr" id={`${character.id}`}>
      <td>
        <InputComponent
          input={[
            "text",
            "character-name",
            character.name,
            "",
            setCharacters,
            "name",
            "Personagem"
          ]}
        />
        <InputComponent
          input={[
            "text",
            "character-class",
            character.classe,
            "",
            setCharacters,
            "classe",
            "Classe"
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "text",
            "player-name",
            character.player,
            "",
            setCharacters,
            "player",
            "Jogador"
          ]}
        />
        <InputComponent
          input={[
            "number",
            "pv-character",
            character.PV,
            "",
            setCharacters,
            "PV"
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "number",
            "total-pv-character",
            character.totalPV,
            "",
            setCharacters,
            "totalPV"
          ]}
        />
        <InputComponent
          input={[
            "number",
            "ca-character",
            character.CA,
            "",
            setCharacters,
            "CA"
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "number",
            "negative-pv-character",
            character.negativePV,
            "",
            setCharacters,
            "negativePV"
          ]}
        />
        <InputComponent
          input={[
            "string",
            "class-powers-character",
            character.classPowers,
            "",
            setCharacters,
            "classPowers",
            "Poderes de Classe"
          ]}
        />
      </td>
    </tr>
  );
}

export default CharacterComponent;