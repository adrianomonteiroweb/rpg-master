import { useContext } from "react";

import "./menuComponent.css";

import ButtonComponent from "../button-component/ButtonComponent";
import { IsContext } from "../../context/IsProvider";
import fetchResultAPI from "../../utils/apiFunctions";

function MenuComponent() {
  const { campaign } = useContext(IsContext);

  const saveToDatabaseByAPI = async (target: any) => {
    // const fetchPost = await fetchResultAPI(
    //   "post",
    //   "https://rpgmaster-api.vercel.app",
    //   "campaign",
    //     campaign
    //   );

    const fetchGet = await fetchResultAPI(
      "get",
      "http://localhost:3333",
      "campaign",
        campaign
      );

      console.log("get", fetchGet);
  };

  return (
    <div className="MenuComponent">
        <ButtonComponent
          btn={[
            "Salvar",
            "button-component save",
            "top-menu-save",
            saveToDatabaseByAPI
          ]}
        />
    </div>
  );
}
  
export default MenuComponent;