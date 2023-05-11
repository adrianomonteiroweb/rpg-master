import InputComponent from "../inputs-components/InputComponent";

import "./campaignSession.css";

function CampaignSession() {
  return (
    <div className="CampaignSession">
      <InputComponent input={[
        "text",
        "title-campaign",
        "Crônicas de Alsaid",
        "Campanha",
      ]} />
      <InputComponent input={[
        "text",
        "subtitle-campaign",
        "Entre areia e sangue",
        "Sub-título",
      ]} />
    </div>
  );
}
  
export default CampaignSession;