import { useState } from "react";
import ButtonComponent from "../components/button-component/ButtonComponent";
import CampaignSession from "../components/sessions-components/CampaignSession";
import CharacterSession from "../components/sessions-components/CharacterSession";

import "./dashboardPage.css"

function Dashboard() {
  const [showCharacters, setShowCharacters] = useState(false);

  const changeShowCharacters = () => !showCharacters ? setShowCharacters(true) : setShowCharacters(false);

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
      {!showCharacters ? undefined : <CharacterSession />}
    </div>
  );
}

export default Dashboard;