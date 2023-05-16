import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import ButtonComponent from "../button-component/ButtonComponent";
import CharacterComponent from "../character-component/CharacterComponent";

import "./characterSession.css";

function CharacterSession() {
  const [characters, setCharacters] = useState([]);

  const initialCharactersFunction = () => {
      localStorage.setItem("characters", JSON.stringify(
        [
          { name: "Personagem 1", classe: "Classe", player: "Jogador 1", PV: 0, totalPV: 0, CA: 0, negativePV: 0, classPowers: "", status: "Normal" },
          { name: "Personagem 2", classe: "Classe", player: "Jogador 2", PV: 0, totalPV: 0, CA: 0, negativePV: 0, classPowers: "", status: "Normal" },
          { name: "Personagem 3", classe: "Classe", player: "Jogador 3", PV: 0, totalPV: 0, CA: 0, negativePV: 0, classPowers: "", status: "Normal" }
        ]
      ))
  };

  useEffect(() => {
    const charactersLS = localStorage.getItem("characters");

    !charactersLS
      ? initialCharactersFunction()
      : setCharacters(JSON.parse(charactersLS));
  }, []);

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
            characters
              .map((character, index) => (
                <CharacterComponent
                  key={index}
                  data={
                    character
                  }
                />
              ))
          }
        </Table>
      </div>
    </>
  );
}

export default CharacterSession;