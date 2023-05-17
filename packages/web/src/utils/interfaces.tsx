export default interface ICharacter {
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