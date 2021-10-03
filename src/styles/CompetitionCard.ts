import styled from "@emotion/styled";
import { styled as muiStyles } from "@mui/material/styles";
import { Avatar } from "@mui/material";

const Row = styled.div<{ parent?: boolean; withYMargin?: boolean }>`
  margin-bottom: ${({ parent }) => (parent ? "20px" : "20px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${({ parent }) => (parent ? "0px" : "30px")};
`;
const Card = styled.div<{ parent?: boolean }>`
  margin-bottom: 30px;
  ::last-child {
    margin-bottom: unset;
  }
`;
const MyAvatar = muiStyles(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(1),
  width: 45,
  height: 45,
}));
const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h5<{ bold?: boolean }>`
  font-size: 18px;
  margin: 0;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  ::first-letter {
    text-transform: uppercase;
  }
`;

export default { Row, Avatar: MyAvatar, AvatarContainer, Title, Card };
