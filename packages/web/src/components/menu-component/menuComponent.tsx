import { useContext } from "react";

import "./menuComponent.css";

import ButtonComponent from "../button-component/ButtonComponent";
import { IsContext } from "../../context/IsProvider";
import fetchResultAPI from "../../utils/apiFunctions";

function MenuComponent() {
  const { campaign } = useContext(IsContext);

  const saveToDatabaseByAPI = async (target: any) => {
    const fetchGet = await fetchResultAPI(
      "get",
      process.env.REACT_APP_HOST,
      "campaign",
      campaign
    );

    const fetchPost = await fetchResultAPI(
      "post",
      process.env.REACT_APP_HOST,
      "campaign",
      campaign
    );

    console.log(fetchGet, fetchPost, process.env.REACT_APP_HOST);
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