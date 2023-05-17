import { useState } from "react";
import ButtonComponent from "../components/button-component/ButtonComponent";
import CampaignSession from "../components/sessions-components/CampaignSession";
import CharacterSession from "../components/sessions-components/CharacterSession";

import "./dashboardPage.css"
import BattleSession from "../components/sessions-components/BattleSession";

function Dashboard() {
  const [showCharacters, setShowCharacters] = useState(false);
  const [showBattles, setShowBattles] = useState(false);

  const changeShowCharacters = () => !showCharacters ? setShowCharacters(true) : setShowCharacters(false);
  const changeShowBattles = () => !showBattles ? setShowBattles(true) : setShowBattles(false);

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