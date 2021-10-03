import { Avatar, Stack, Typography, colors } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import { matchStatusEnum } from '../../enums/matchStatusEnum';
import { IMatch } from '../../interfaces/IMatch';

interface props {
    match: IMatch;
    onClick: () => any;
}
const AVATAR_SZIE = 40;
const MatchCard = ({
    match: {
        contestant,
        match_details: {
            match_status,
            scores: { total, ft },
        },
        date,
        time,
    },
    onClick,
}: props) => {
    const isMatchHasStart = match_status === matchStatusEnum.Playing ? true : false;
    const isMatchEnded = match_status === matchStatusEnum.Played ? true : false;
    const isMatchFixture = match_status === matchStatusEnum.Fixture ? true : false;
    const calcMinutes = () => dayjs(dayjs()).diff(dayjs(`${date} ${time}`), 'minutes');

    return (
        <Stack direction="row" onClick={onClick} alignItems="center" style={{ cursor: 'pointer' }}>
            <Stack width={30} height={30}>
                {isMatchHasStart && (
                    <Stack
                        style={{
                            backgroundColor: colors.green[500],
                            borderRadius: '50%',
                            padding: '4px',
                            color: 'white',
                            fontSize: '13px',
                        }}
                    >
                        {calcMinutes() >= 89 ? '90+' : calcMinutes()}
                    </Stack>
                )}
            </Stack>
            <Stack width="100%" justifyContent="center">
                <Stack direction="row" style={{ width: '100%' }} justifyContent="space-between" alignItems="center" py={1}>
                    <Stack direction="row" alignItems="center">
                        <Avatar sx={{ height: AVATAR_SZIE, width: AVATAR_SZIE, marginRight: 2 }}>
                            {contestant[0].name.substring(0, 2)}
                        </Avatar>
                        <Typography fontWeight="400" fontSize="16">
                            {contestant[0].name}
                        </Typography>
                    </Stack>
                    <Typography variant="h6" color={isMatchEnded && ft.away < ft.home ? 'green' : undefined}>
                        {isMatchHasStart ? total.home : isMatchEnded ? ft.home : null}
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" py={1}>
                    <Stack direction="row" alignItems="center">
                        <Avatar sx={{ height: AVATAR_SZIE, width: AVATAR_SZIE, marginRight: 2 }}>
                            {contestant[1].name.substring(0, 2)}
                        </Avatar>
                        <Typography fontWeight="400" fontSize="16">
                            {contestant[1].name}
                        </Typography>
                    </Stack>
                    <Typography variant="h6" color={isMatchEnded && ft.away > ft.home ? 'green' : undefined}>
                        {isMatchHasStart ? total.away : isMatchEnded ? ft.away : null}
                    </Typography>
                </Stack>
            </Stack>
            {isMatchFixture && <Typography variant="h6">{time}</Typography>}
        </Stack>
    );
};
export default MatchCard;
