import { AppBar, Badge, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartDialog from "./CartDialog";

function Cartbutton() {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  return (
    <>
      {cart.length > 0 && (
        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            backgroundColor: "#fff",
            maxHeight: 40,
            cursor: "pointer",
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.7rem",
              mt: -1,
            }}
          >
            <Badge
              badgeContent={cart.length}
              sx={{
                mr: 3,
                "& .MuiBadge-badge": {
                  backgroundColor: "#f1f1f1",
                  color: "#000",
                  fontSize: "0.7rem",
                },
              }}
            />
            <Typography color="#000" variant="overline">
              مشاهده دفترچه یادداشت{" "}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <CartDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Cartbutton;
