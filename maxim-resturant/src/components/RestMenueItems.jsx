import ButtonComponent from "./ButtonComponet";
import ghelyanButton from "../assets/ghelyan.png";
import restMenueButton from "../assets/rest-menue.png";
import coffeMenueButton from "../assets/coffee-menue.png";
import { Box, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
function RestaurantMenue() {
   const navigate = useNavigate();
  const buttons = [
    <ButtonComponent onClick={()=>navigate("/menue/hookah")}>
      <Box component="img" src={ghelyanButton} width={200} />
    </ButtonComponent>,
    <ButtonComponent onClick={()=>navigate("/menue/restaurant")}>
      <Box component="img" src={restMenueButton} width={200} />
    </ButtonComponent>,
    <ButtonComponent onClick={()=>navigate("/menue/coffee")}>
      <Box component="img" src={coffeMenueButton} width={200} />
    </ButtonComponent>,
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <ButtonGroup
        orientation={"horizontal"}
        display="flex"
        flexwrap="wrap"
        justifycontent="center"
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          "& .MuiButtonGroup-grouped": {
            border: "none",
            padding: 0,
            m: "auto 50px",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.3)",
              background: "none",
            },
          },
        }}
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

export default RestaurantMenue;
