import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import emotionStyled from '@emotion/styled';

export const MyContainer = emotionStyled.div`
  max-width: 100%;
  overflow-x: 100%;
`;
export const ContainerStyled = styled(Container)(({ theme }) => ({
    padding: theme.spacing(1.5),
}));
