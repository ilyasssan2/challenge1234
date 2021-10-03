import React from "react";
import { IMatchesOfCompetition } from "../../interfaces/ICompetitionWithThierMatches";
import { IMatch } from "../../interfaces/IMatch";
import CompetitionCard from "../../styles/CompetitionCard";
import MatchCard from "./MatchCard";

interface props {
  Competition: IMatchesOfCompetition;
  onClick: (match: IMatch | null) => any;
}
const Competition = ({ Competition, onClick }: props) => {
  return (
    <CompetitionCard.Card>
      <CompetitionCard.Row parent>
        <CompetitionCard.AvatarContainer>
          <CompetitionCard.Avatar>
            {Competition.name.substring(0, 2)}
          </CompetitionCard.Avatar>
          <CompetitionCard.Title bold>{Competition.name}</CompetitionCard.Title>
        </CompetitionCard.AvatarContainer>
      </CompetitionCard.Row>
      {Competition.matches.map((match) => (
        <MatchCard
          key={match.match_id}
          match={match}
          onClick={onClick.bind(this, match)}
        />
      ))}
    </CompetitionCard.Card>
  );
};

export default React.memo(Competition);
