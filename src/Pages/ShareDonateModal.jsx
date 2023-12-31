import React, { useState, useEffect } from "react";
import { Modal, Button, Box, Tooltip, TextField } from "@mui/material";
import { BtnStyle, TextFieldStyle } from "../Shared";
import CloseIcon from "@mui/icons-material/Close";


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
  border: '2px solid #E91F41',
  backdropFilter: "blur(15px)",
};

const TooltipStyle = {
  tooltip: {
    sx: {
      color: "white",
      bgcolor: "#DB71A2",
      "& .MuiTooltip-arrow": {
        color: "#DB71A2",
      },
    },
  },
};

export const ShareDonateModal = ({ campaign, isOpen, onClose }) => {
  const [stage, setStage] = useState("share");

  //tooltip logic
  const [tooltipOpen, setTooltipOpen] = useState(false);
  useEffect(() => {
    if (tooltipOpen) {
      setTimeout(() => {
        setTooltipOpen(false);
      }, 1000);
    }
  }, [tooltipOpen]);

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        onClose();
        //setStage("landing");
      }}
    >
      <Box style={ModalStyle}>
        <span
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => {
            onClose();
           // setStage("landing");
          }}
        >
          <CloseIcon fontSize="large" />
        </span>

        <h1 style={{ margin: "0 0 12px 0",
      textShadow: 'none'
      }}>
          One last thing...
        </h1>

        {stage == "landing" && (
          <p>
            Nice one! But you can have even more impact by doing just one more
            thing - either <b>share</b> the campaign, or <b>donate</b> to help
            keep Louder Than Words running. <b>Will you do one of those?</b>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "15px",
              }}
            >
              <Button style={BtnStyle} onClick={() => setStage("share")}>
                Share
              </Button>
              <Button style={BtnStyle} onClick={() => setStage("donate")}>
                Donate
              </Button>
            </div>
          </p>
        )}

        {stage == "share" && (
          <>
            <h3 style={{ textShadow: 'none', margin: "0 0 12px 0", textAlign: 'center'}}>
              Will you share the campaign?
            </h3>
            <p>
              The most effective way to get someone else to take this action is
              to <b>message them directly</b> - rather than just posting it on
              your wall.
            </p>

            <div style={{ marginBottom: "10px" }}>
              <TextField
                style={TextFieldStyle}
                fullWidth
                value={window.location.origin}
              />
              <center>
                <Tooltip
                  title="Copied!"
                  componentsProps={TooltipStyle}
                  open={tooltipOpen}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="right"
                  arrow
                >
                  <Button
                    style={{ ...BtnStyle, transform: "scale(0.8)" }}
                    onClick={() => {
                      setTooltipOpen(true);
                      navigator.clipboard.writeText(
                        window.location.origin
                      );
                    }}
                  >
                    Copy link
                  </Button>
                </Tooltip>
              </center>

            </div>
          </>
        )}

        {stage == "donate" && (
          <>
            <p>
              <center>
                {" "}
                <span style={{ fontFamily: "Fjalla One" }}>
                  <em>Thank you!</em>
                </span>
              </center>
              <br />
          </p>

            <center>
              <Button
                href=""
                target="_blank"
                style={BtnStyle}
              >
                Chip in
              </Button>
            </center>
            <br />
          </>
        )}

        <center>
          <Button
            sx={{ ...BtnStyle, transform: "scale(0.8)", marginTop: "5px" }}
            onClick={() => {
              onClose();
              setStage("landing");
            }}
          >
            Close
          </Button>
        </center>
      </Box>
    </Modal>
  );
};
