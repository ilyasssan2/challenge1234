import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import FolloweTeam from '../components/Ui/FolloweTeam';
import { IFollowedTeam } from '../interfaces/IFollowedTeam';
import { getFollowedTeams } from '../utils/handleLoacalSorage';

const Followed = () => {
    const [search, setSearch] = useState('');
    const [filteredTeams, setFilteredTeams] = useState<IFollowedTeam[]>([]);

    useEffect(() => {
        const teams = getFollowedTeams();
        if (search) {
            const newTeams = teams.filter((team) => (team.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? true : false));
            setFilteredTeams(newTeams);
        } else {
            setFilteredTeams(teams);
        }
    }, [search]);

    return (
        <Layout hideLiveButton search={search} onChange={setSearch}>
            <Stack spacing={2}>
                {filteredTeams.map((team) => (
                    <FolloweTeam team={team} key={team.id} horizontalStyle />
                ))}
            </Stack>
        </Layout>
    );
};

export default Followed;
