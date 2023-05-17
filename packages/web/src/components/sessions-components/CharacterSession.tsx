import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import ButtonComponent from "../button-component/ButtonComponent";
import CharacterComponent from "../character-component/CharacterComponent";

import fetchResultAPI from "../../utils/apiFunctions";

import "./characterSession.css";

function CharacterSession() {
  const [characters, setCharacters] = useState<any[]>([]);

  const addNewCharacter = () => {
    const campaignID: string | null = localStorage.getItem("campaignID");

    setCharacters([...characters, { id: characters.length + 1, name: "", classe: "", player: "", PV: 0, totalPV: 0, CA: 0, negativePV: 0, classPowers: "", campaignID: campaignID && JSON.parse(campaignID).id }]);
  };

  const saveCharactersAPI = async () => await fetchResultAPI(
    "put",
    process.env.REACT_APP_HOST,
    "character",
    characters
  );

  useEffect(() => {
    const charactersLS: string | null = localStorage.getItem("characters");

    charactersLS && setCharacters(JSON.parse(charactersLS));
  }, [])

  useEffect(() => {
    localStorage
      .setItem("characters", JSON.stringify(characters));
    console.log(characters);
  }, [characters]);

  const setCharactersFunction = (event: any, prop: any) => {
    const id = Number(event.target.parentNode.parentNode.id);
    
    let filterCharacterByID = characters
      .filter((char) => char.id === Number(id));

    prop === "PV" || prop === "CA" || prop === "totalPV" || prop === "negativePV"
      ? filterCharacterByID[0][prop] = Number(event.target.value)
      : filterCharacterByID[0][prop] = event.target.value;
    
    const charactersNoChanged = characters
      .filter((char) => char.id !== Number(id));
    
    setCharacters([...charactersNoChanged, ...filterCharacterByID]);
  }

  return (
    <>
      <div className="character-menu">
        <ButtonComponent
          btn={[
            "Novo Personagem",
            "button-component new",
            "new-character",
            addNewCharacter
          ]}
        />
        <ButtonComponent
          btn={[
            "Salvar Personagens",
            "button-component save",
            "save-characters",
            saveCharactersAPI
          ]}
        />
      </div>
      <div className="character-table">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Personagem / Classe</td>
              <td>Jogador / PV</td>
              <td>PV Total / CA</td>
              <td>PV Negativo - Poderes de Classe</td>
            </tr>
            {
              characters
                .map((character, index) => (
                  <CharacterComponent
                    key={index}
                    character={ character }
                    setCharacters={ setCharactersFunction }
                  />
                ))
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CharacterSession;