export interface ICharacter {
  character: {
      id: number;
      name: string;
      classe: string;
      player: string;
      PV: number;
      totalPV: number;
      CA: number;
      negativePV: number;
      classPowers: string;
      campaignID: string;
  },
  setCharacters: Function
}

export interface IBattle {
  battle: {
    id: number;
    name: string;
    initiative: string;
    CA: number;
    PV: number;
    damage: number;
  },
  setBattles: Function
}