import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
const RightTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const UpTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogComponent({
  open = false,
  onClose,
  children,
  transitionMove = "right",
  CloseIcon,
  bgcolor="#64625a"
}) {
  return (
    <React.Fragment>
      <Dialog
        fullScreen={true}
        open={open}
        slots={
          transitionMove == "right"
            ? {
                transition: RightTransition,
              }
            : { transition: UpTransition }
        }
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogActions sx={{ position: "absolute", top: 0, left: 0 }}>
          <Button onClick={onClose}>
            {CloseIcon}
          </Button>
        </DialogActions>
        <DialogContent
          sx={{
            backgroundColor: bgcolor,
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
