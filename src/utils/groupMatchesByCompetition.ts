import { ICompetitionWithThierMatches } from "../interfaces/ICompetitionWithThierMatches";
import { IMatch } from "../interfaces/IMatch";

export const groupMatchesByCompetition = (
  matches: IMatch[]
): ICompetitionWithThierMatches => {
  const formatedMatches: ICompetitionWithThierMatches = {};
  matches.forEach((match) => {
    const { name, id, display_order: order } = match.competition;
    formatedMatches[order] = formatedMatches?.[order]
      ? {
          ...formatedMatches?.[order],
          matches: [...formatedMatches[order].matches, match],
        }
      : { name, id, matches: [match] };
  });
  return formatedMatches;
};
