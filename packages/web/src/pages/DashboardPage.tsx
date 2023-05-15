import CampaignSession from "../components/sessions-components/CampaignSession";
import CharacterSession from "../components/sessions-components/CharacterSession";

import "./dashboardPage.css"

function Dashboard() {
    return (
      <div className="dashboard">
        <CampaignSession />
        <CharacterSession />
      </div>
    );
  }
  
  export default Dashboard;