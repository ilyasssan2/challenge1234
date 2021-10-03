import { BottomNavigation, BottomNavigationAction, Container, Paper } from '@mui/material';
import React from 'react';

import CalendarToday from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';

import { Box } from '@mui/system';
import { useRouter } from 'next/router';

const routes = { '/followed': 1, '/': 0 };
const BottomBar = () => {
    const { push, pathname } = useRouter();
    const ref = React.useRef<HTMLDivElement>(null);
    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <Container maxWidth="lg">
                    <BottomNavigation showLabels value={routes[pathname]}>
                        <BottomNavigationAction label="Calendar" icon={<CalendarToday />} onClick={() => push('/')} />
                        <BottomNavigationAction label="Followed teams" icon={<StarIcon />} onClick={() => push('followed')} />
                    </BottomNavigation>
                </Container>
            </Paper>
        </Box>
    );
};

export default BottomBar;
