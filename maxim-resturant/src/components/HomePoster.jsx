import { Box } from "@mui/material";
import CarouselImages from "./Carousel";
import MaximLogo from "../assets/logo.png";
function HomePoster() {
  return (
    <Box>
      <CarouselImages />
      <Box
        width={300}
        component="img"
        src={MaximLogo}
        marginTop={-6}
        alt="logo"
        position="relative"
      />
    </Box>
  );
}

export default HomePoster;
