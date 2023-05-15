import { Table } from "react-bootstrap";

import ButtonComponent from "../button-component/ButtonComponent";
import CharacterComponent from "../character-component/CharacterComponent";

import "./characterSession.css";

function CharacterSession() {
  return (
    <>
      <div className="character-menu">
        <ButtonComponent
          btn={[
            "Novo Personagem",
            "button-component new",
            "new-character"
          ]}
        />
      </div>
      <div className="character-table">
        <Table>
          <tr>
            <td>Personagem</td>
            <td>Classe</td>
            <td>Jogador</td>
            <td>PV</td>
            <td>PV Total</td>
            <td>CA</td>
            <td>PV Negativo</td>
            <td>Poderes de Classe</td>
            <td>Status</td>
          </tr>
          {
            [1, 2, 3]
              .map((character, index) => (
                <CharacterComponent
                  key={index}
                />
              ))
          }
        </Table>
      </div>
    </>
  );
}

export default CharacterSession;