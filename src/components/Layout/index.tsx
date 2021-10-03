import React from 'react';

import BottomBar from './BottomBar';
import MyAppbar from './MyAppbar';
import { ContainerStyled, MyContainer } from '../../styles/Layout';

interface props {
    hideLiveButton?: boolean;
    isLiveActive?: boolean;
    onChange: (value: string) => any;
    search: string;
    onClickOnLiveButton?: () => any;
}

const Layout: React.FC<props> = ({ children, hideLiveButton, onChange, onClickOnLiveButton, isLiveActive, search }) => {
    return (
        <MyContainer>
            <MyAppbar
                hideLiveButton={hideLiveButton}
                onChange={onChange}
                onClickOnLiveButton={onClickOnLiveButton}
                isLiveActive={isLiveActive}
                search={search}
            />
            <ContainerStyled maxWidth="lg">{children}</ContainerStyled>
            <BottomBar />
        </MyContainer>
    );
};

export default Layout;
