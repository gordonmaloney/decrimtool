import React from "react";
import { Modal, Button, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { BtnStyle } from "../Shared";


const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "auto",
  maxWidth: "90vw",
  margin: "0 auto 0 auto",
  padding: "15px",
  backgroundColor: "#DCD5D8",
  borderRadius: "0",
  border: '2px solid #DB71A2',
  backdropFilter: "blur(15px)",
};

export const SendModal = ({ body, isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box style={ModalStyle}>

      <span style={{float: "right", cursor: 'pointer'}}
      onClick={onClose}
      ><CloseIcon fontSize="large" /></span>
      
        <h1 style={{ margin: "0 0 12px 0", textShadow: 'none' }}>
          Almost there...
        </h1>
        {body}
        <center>
          <Button
            sx={{ ...BtnStyle, transform: "scale(0.8)", marginTop: "5px" }}
            onClick={onClose}
          >
            Close
          </Button>
        </center>
      </Box>
    </Modal>
  );
};
