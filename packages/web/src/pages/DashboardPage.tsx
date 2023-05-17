import { useState } from "react";
import ButtonComponent from "../components/button-component/ButtonComponent";
import CampaignSession from "../components/sessions-components/CampaignSession";
import CharacterSession from "../components/sessions-components/CharacterSession";

import "./dashboardPage.css"
import BattleSession from "../components/sessions-components/BattleSession";

function Dashboard() {
  const showCharacterLS: string | null | any = localStorage.getItem("showCharacter") || true;
  const showBattlesLS: string | null | any = localStorage.getItem("showBattle") || true;

  const [showCharacters, setShowCharacters] = useState(JSON.parse(showCharacterLS));
  const [showBattles, setShowBattles] = useState(JSON.parse(showBattlesLS));

  const changeShowCharacters = () => {
    if (!showCharacters) {
      setShowCharacters(true);
      localStorage.setItem("showCharacter", JSON.stringify(true));
    } else {
      setShowCharacters(false);
      localStorage.setItem("showCharacter", JSON.stringify(false));
    }
  }

  const changeShowBattles = () => {
    if (!showBattles) {
      setShowBattles(true);
      localStorage.setItem("showBattle", JSON.stringify(true));
    } else {
      setShowBattles(false);
      localStorage.setItem("showBattle", JSON.stringify(false));
    }
  }

  return (
    <div className="dashboard">
      <CampaignSession />
      <ButtonComponent
        btn={[
          !showCharacters ? "+ Exibir Sessão de Personagens" : "- Esconder Sessão de Personagens",
          "show-hide-button",
          "show-hide-characters",
          changeShowCharacters
        ]}
      />
      {showCharacters && <CharacterSession />}
      <ButtonComponent
        btn={[
          !showBattles ? "+ Exibir Sessão de Batalhas" : "- Esconder Sessão de Batalhas",
          "show-hide-button",
          "show-hide-battles",
          changeShowBattles
        ]}
      />
      {showBattles && <BattleSession />}
    </div>
  );
}

export default Dashboard;