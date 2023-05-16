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
      </td>
      <td>
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
      </td>
      <td>
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
      </td>
      <td>
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
      </td>
      <td>
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