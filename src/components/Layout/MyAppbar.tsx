import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Chip, Container } from '@mui/material';
import Podcasts from '@mui/icons-material/Podcasts';

import { StyledAppBar, BottomDiv, Search, SearchIconWrapper, StyledInputBase, StyledToolbar } from '../../styles/AppBar';

interface props {
    hideLiveButton?: boolean;
    onClickOnLiveButton?: () => any;
    isLiveActive?: boolean;
    onChange: (value: string) => any;
    search: string;
}

const MyAppbar = ({ hideLiveButton, onChange, onClickOnLiveButton, isLiveActive, search }: props) => {
    return (
        <StyledAppBar position="sticky">
            <Container maxWidth="lg">
                <StyledToolbar>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color="disabled" fontSize="medium" />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" onChange={(e) => onChange(e.currentTarget.value)} value={search} />
                    </Search>
                    {!hideLiveButton && (
                        <BottomDiv>
                            <Chip
                                icon={<Podcasts style={{ color: 'white' }} />}
                                label="Live matches"
                                style={{ color: 'white' }}
                                onClick={onClickOnLiveButton}
                                color={isLiveActive ? 'success' : undefined}
                            />
                        </BottomDiv>
                    )}
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
};

export default MyAppbar;
