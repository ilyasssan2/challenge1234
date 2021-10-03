import { IMatch } from "./IMatch";

export interface IMatchesOfCompetition {
  id: string;
  name: string;
  matches: IMatch[];
}

export interface ICompetitionWithThierMatches {
  [id: number]: IMatchesOfCompetition;
}
