import { IBattle } from "../../utils/interfaces";
import InputComponent from "../inputs-components/InputComponent";

import "./battleComponent.css";

function BattleComponent({ battle, setBattles }: IBattle) {
  return (
    <tr className="Battle-tr" id={`${battle.id}`}>
      <td>
        <InputComponent
          input={[
            "text",
            "battle-name",
            battle.name,
            "",
            setBattles,
            "name",
            "Monstro"
          ]}
        />
        <InputComponent
          input={[
            "text",
            "battle-initiave",
            battle.initiative,
            "",
            setBattles,
            "initiave",
            "Iniciativa"
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "number",
            "ca-battle",
            battle.CA,
            "",
            setBattles,
            "CA",
            0
          ]}
        />
        <InputComponent
          input={[
            "number",
            "pv-battle",
            battle.PV,
            "",
            setBattles,
            0
          ]}
        />
      </td>
      <td>
        <InputComponent
          input={[
            "number",
            "damage-battle",
            battle.damage,
            "",
            setBattles,
            0
          ]}
        />
      </td>
    </tr>
  );
}

export default BattleComponent;