import { useContext } from "react";

import "./menuComponent.css";

import ButtonComponent from "../button-component/ButtonComponent";
import { IsContext } from "../../context/IsProvider";

function MenuComponent() {
  const { campaign } = useContext(IsContext);

  const saveToDatabaseByAPI = (target: any) => {
    console.log("atualizar na api");
    
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