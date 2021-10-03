import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { colors, IconButton } from "@mui/material";
interface props {
  date: string;
  onDecrease: () => any;
  onIncrease: () => any;
}
const DateSwitcher = ({ date, onDecrease, onIncrease }: props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      paddingY={1}
    >
      <IconButton
        onClick={onDecrease}
        style={{ backgroundColor: colors.grey[200] }}
        size="small"
      >
        <ChevronLeft />
      </IconButton>
      <Chip label={date} />
      <IconButton
        onClick={onIncrease}
        style={{ backgroundColor: colors.grey[200] }}
        size="small"
      >
        <ChevronRight />
      </IconButton>
      {/* <Chip onClick={onIncrease} clickable icon={<ChevronRight />} /> */}
    </Stack>
  );
};

export default DateSwitcher;
