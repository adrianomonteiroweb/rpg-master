import ICharacter from "../../utils/interfaces";
import InputComponent from "../inputs-components/InputComponent";

import "./characterComponent.css";

function CharacterComponent({ data }: ICharacter) {
  return (
    <tr className="character-tr">
      <td>
        <InputComponent
          input={[
            "text",
            "character-name",
            data.name,
            ""
          ]}
        />
        <InputComponent
          input={[
            "text",
            "character-class",
            data.classe,
            ""
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "text",
            "player-name",
            data.player,
            ""
          ]}
        />
        <InputComponent
          input={[
            "number",
            "pv-character",
            data.PV,
            ""
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "number",
            "total-pv-character",
            data.totalPV,
            ""
          ]}
        />
        <InputComponent
          input={[
            "number",
            "ca-character",
            data.CA,
            ""
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "number",
            "negative-pv-character",
            data.negativePV,
            ""
          ]}
        />
        <InputComponent
          input={[
            "string",
            "class-powers-character",
            data.classPowers,
            ""
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "string",
            "status-character",
            data.status,
            ""
          ]}
        />
      </td>
    </tr>
  );
}

export default CharacterComponent;