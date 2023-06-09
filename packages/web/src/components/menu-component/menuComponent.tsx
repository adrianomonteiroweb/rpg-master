import { useContext } from "react";

import "./menuComponent.css";

import ButtonComponent from "../button-component/ButtonComponent";
import { IsContext } from "../../context/IsProvider";
import fetchResultAPI from "../../utils/apiFunctions";

function MenuComponent() {
  const { campaign } = useContext(IsContext);

  const saveToDatabaseByAPI = async (target: any) => {
    const campaignID: string | null = localStorage.getItem("campaignID");

    if (!campaignID) {
      const fetchPost = await fetchResultAPI(
        "post",
        process.env.REACT_APP_HOST,
        "campaign",
        campaign
      );
      
      if (fetchPost)
        localStorage.setItem("campaignID", JSON.stringify({ ...campaign, id: fetchPost.data.id }))
    } else {
      await fetchResultAPI(
        "put",
        process.env.REACT_APP_HOST,
        "campaign",
        { title: campaign.title, subtitle: campaign.subtitle },
        JSON.parse(campaignID).id
      );
    }
  };

  return (
    <div className="menuComponent">
      <ButtonComponent
        btn={[
          "Salvar Campanha",
          "button-component save",
          "top-menu-save",
          saveToDatabaseByAPI
        ]}
      />
    </div>
  );
}
  
export default MenuComponent;