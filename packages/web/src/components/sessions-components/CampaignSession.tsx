import { useContext } from "react";

import InputComponent from "../inputs-components/InputComponent";

import { IsContext } from "../../context/IsProvider";
import MenuComponent from "../menu-component/menuComponent";

import "./campaignSession.css";

function CampaignSession() {
  const { campaign, setCampaign } = useContext(IsContext);
  
  const setCampaignFunc = (event: any, prop: any) =>
    event.target.id === "title-campaign"
      ? setCampaign({ ...campaign, title: event.target.value })
      : setCampaign({ ...campaign, subtitle: event.target.value });
  
  return (
    <div className="campaignSession">
      <MenuComponent />
      <InputComponent input={[
        "text",
        "title-campaign",
        campaign.title,
        "Campanha",
        setCampaignFunc
      ]} />
      <InputComponent input={[
        "text",
        "subtitle-campaign",
        campaign.subtitle,
        "",
        setCampaignFunc
      ]} />
    </div>
  );
}
  
export default CampaignSession;