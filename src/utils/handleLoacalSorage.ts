import { IFollowedTeam } from "../interfaces/IFollowedTeam";

const followedTeams = "followedTeams";

export const getFollowedTeams = (): IFollowedTeam[] => {
  try {
    return (
      (JSON.parse(localStorage.getItem(followedTeams)!) as IFollowedTeam[]) ||
      []
    );
  } catch (error) {
    return [];
  }
};

export const isTeamFollowed = (id: string) => {
  const teams = getFollowedTeams();
  const team = teams.find((team) => team.id === id);
  return team ? true : false;
};

export const addFollowedTeam = (team: IFollowedTeam) => {
  try {
    localStorage.setItem(
      followedTeams,
      JSON.stringify([...getFollowedTeams(), team])
    );
  } catch (error) {
    return [];
  }
};

export const removeFollowedTeam = (id: string) => {
  try {
    const newFollowedTeamTeams = getFollowedTeams().filter(
      (team) => team.id !== id
    );
    localStorage.setItem(followedTeams, JSON.stringify(newFollowedTeamTeams));
  } catch (error) {
    return [];
  }
};
