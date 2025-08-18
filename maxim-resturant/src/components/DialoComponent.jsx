import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function DialogComponent({ open = false, onClose, children }) {
  return (
    <React.Fragment>
      <Dialog
        fullScreen={true}
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogActions sx={{ position: "absolute", top: 0, left: 0 }}>
          <Button onClick={onClose}>
            <CloseIcon sx={{ color: "#f1f1f1" }} />
          </Button>
        </DialogActions>
        <DialogContent
          sx={{
            backgroundColor: "#64625a",
            display: "flex",
            alignContent: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
