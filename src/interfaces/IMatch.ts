import { matchStatusEnum } from "../enums/matchStatusEnum";

export interface IMatch {
  match_id: string;
  time: string;
  date: string;
  competition: {
    id: string;
    name: string;
    display_order: number;
  };
  contestant: IContestant[];
  match_details: {
    match_status: matchStatusEnum;
    winner: string;
    scores: {
      ft: score;
      total: score;
    };
  };
}

export interface IContestant {
  id: string;
  name: string;
  position: string;
}
interface score {
  home: number;
  away: number;
}
