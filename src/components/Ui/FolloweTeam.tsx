import { Avatar, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IFollowedTeam } from '../../interfaces/IFollowedTeam';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { addFollowedTeam, isTeamFollowed, removeFollowedTeam } from '../../utils/handleLoacalSorage';
interface props {
    team: IFollowedTeam;
    horizontalStyle?: boolean;
}

const FolloweTeam = ({ team, horizontalStyle }: props) => {
    const AVART_SZIE = horizontalStyle ? 45 : 65;
    const [isFollwed, setIsFollwed] = useState(isTeamFollowed(team.id));
    const handleFollow = () => {
        if (isFollwed) {
            removeFollowedTeam(team.id);
            setIsFollwed(false);
        } else {
            addFollowedTeam(team);
            setIsFollwed(true);
        }
    };
    return (
        <Stack direction={horizontalStyle ? 'row' : 'column'} alignItems="center">
            <Avatar sx={{ height: AVART_SZIE, width: AVART_SZIE }}>{team.name.substring(0, 2)}</Avatar>
            <Typography style={{ fontSize: 17 }} mt={horizontalStyle ? 0 : 2} ml={horizontalStyle ? 2 : 0} textAlign="center">
                {team.name}
            </Typography>
            <IconButton size="large" onClick={handleFollow} style={{ marginLeft: horizontalStyle ? 'auto' : 0 }}>
                {isFollwed ? <StarIcon fontSize="large" color="primary" /> : <StarBorderIcon fontSize="large" />}
            </IconButton>
        </Stack>
    );
};

export default FolloweTeam;
