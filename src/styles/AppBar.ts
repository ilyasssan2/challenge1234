import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    background: 'white',
    borderRadius: '2px',
    padding: theme.spacing(1.5),
    width: '100%',
}));

export const SearchIconWrapper = styled('div')(({}) => ({
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled('input')(({}) => ({
    flex: 1,
    height: '100%',
    fontSize: '16px',
    border: 0,
    outline: 0,
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    padding: theme.spacing(1.5, 0, 1.5, 0),
}));

export const StyledToolbar = styled(Toolbar)(({}) => ({
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: 0,
}));

export const BottomDiv = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(1.5),
}));
