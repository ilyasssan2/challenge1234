import { Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { IContestant } from "../../interfaces/IMatch";
import { ModalContent } from "../../styles/Modal";
import FolloweTeam from "../Ui/FolloweTeam";

interface props {
  contestant1: IContestant;
  contestant2: IContestant;
  onClose: () => any;
}
const FollowModal = ({ contestant1, contestant2, onClose }: props) => {
  return (
    <Modal open={true} onClose={onClose}>
      <ModalContent>
        <Typography variant="h5" mb={3}>
          Follow
        </Typography>
        <Stack direction="row" spacing={8}>
          <FolloweTeam team={contestant1} />
          <FolloweTeam team={contestant2} />
        </Stack>
      </ModalContent>
    </Modal>
  );
};
export default FollowModal;
