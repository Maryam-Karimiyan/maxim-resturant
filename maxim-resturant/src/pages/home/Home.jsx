import { Box } from "@mui/material";
import HomePoster from "../../components/HomePoster";
import RestaurantMenue from "../../components/RestMenueItems";
import ButtonComponent from "../../components/ButtonComponet";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import { useState } from "react";
import DialogComponent from "../../components/DialoComponent";
import ContactDialog from "../../components/ContactDialog";
export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 4,
      }}
    >
      <HomePoster />
      <Box marginTop={7}>
        <RestaurantMenue />
      </Box>
      <ButtonComponent
        sx={{
          fontSize: "1rem",
          fontFamily: "tahoma",
          bottom: "-50px",
          left: 0,
          color: "#000",
          backgroundColor: "#f0b61c",
          borderRadius: "20px",
          borderRadius: "0 25px 25px 0",
          position: "relative",
          width: "250px",
        }}
        endIcon={
          <PriorityHighRoundedIcon
            sx={{
              borderRadius: "15px",
              backgroundColor: "#ffff",
              color: "#f0b61c",
            }}
          />
        }
        onClick={() => setOpen(true)}
      >
        مشاهده اطلاعات تماس
      </ButtonComponent>
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
