import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import ButtonComponent from "../button-component/ButtonComponent";

import fetchResultAPI from "../../utils/apiFunctions";
import BattleComponent from "../battle-component/BattleComponent";

// import "./battleSession.css";

function BattleSession() {
  const [battles, setBattles] = useState<any[]>([]);

  const addNewBattle = () => {
    const campaignID: string | null = localStorage.getItem("campaignID");

    setBattles([...battles, { id: battles.length + 1, name: "", initiative: "", CA: 0, PV: 0, damage: 0, campaignID: campaignID && JSON.parse(campaignID).id }]);
  };

  // const saveBattlesAPI = async () => await fetchResultAPI(
  //   "put",
  //   process.env.REACT_APP_HOST,
  //   "Battle",
  //   Battles
  // );

  useEffect(() => {
    const battlesLS: string | null = localStorage.getItem("battles");

    battlesLS && setBattles(JSON.parse(battlesLS));
  }, [])

  useEffect(() => {
    localStorage
      .setItem("battles", JSON.stringify(battles));
  }, [battles]);

  const setBattlesFunction = (event: any, prop: any) => {
    const id = Number(event.target.parentNode.parentNode.id);
    
    let filterBattleByID = battles
      .filter((bat) => bat.id === Number(id));

    prop === "PV" || prop === "CA" || prop === "totalPV" || prop === "negativePV"
      ? filterBattleByID[0][prop] = Number(event.target.value)
      : filterBattleByID[0][prop] = event.target.value;
    
    const battlesNoChanged = battles
      .filter((bat) => bat.id !== Number(id));
    
    setBattles([...battlesNoChanged, ...filterBattleByID]);
  }

  return (
    <>
      <div className="Battle-menu">
        <ButtonComponent
          btn={[
            "Nova Batalha",
            "button-component new",
            "new-Battle",
            addNewBattle
          ]}
        />
        <ButtonComponent
          btn={[
            "Salvar Batalha",
            "button-component save",
            "save-Battles",
            // saveBattlesAPI
          ]}
        />
      </div>
      <div className="Battle-table">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Nome / Iniciativa</td>
              <td>CA / PVs</td>
              <td>Danos</td>
            </tr>
            {
              battles
                .map((battle, index) => (
                  <BattleComponent
                    key={index}
                    battle={ battle }
                    setBattles={ setBattlesFunction }
                  />
                ))
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default BattleSession;