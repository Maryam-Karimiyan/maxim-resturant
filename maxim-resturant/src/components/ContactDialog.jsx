import { Box, Typography, Link, Container, Stack } from "@mui/material";
import DialogComponent from "./DialoComponent";
import instagramImg from "../assets/instagram.png";
import phoneImg from "../assets/phone.png";
import mapaddressImg from "../assets/mapaddress.png";

function ContactDialog({ open, onClose }) {
  return (
    <>
      <DialogComponent open={open} onClose={onClose}>
        <Box>
          <Box
            sx={{
              maxWidth: "600px",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Link
              component="button"
              href="https://instagram.com/maxim.caferestaurant"
              target="_blank"
              sx={{
                textDecoration: "none",
                backgroundColor: "#ffffff",
                width: "250px",
                borderRadius: "10px",
                px: 7,
                py: 3,
              }}
            >
              <Box sx={{ width: "40px" }} component="img" src={instagramImg} />
              <Typography sx={{ fontFamily: "light,tahoma" }} color="#000">
                maxim.caferestaurant
              </Typography>
            </Link>
            <Link
              component="button"
              href="tel:02188880395"
              target="_blank"
              sx={{
                textDecoration: "none",
                backgroundColor: "#ffffff",
                width: "250px",
                borderRadius: "10px",
                px: 7,
                py: 3,
              }}
            >
              <Box sx={{ width: "40px" }} component="img" src={phoneImg} />
              <Typography sx={{ fontFamily: "light,tahoma" }} color="#000">
                02188880395
              </Typography>
            </Link>
            <Link
              component="button"
              href="https://www.google.com/maps?q=35.76255755240792,51.41766858451759"
              target="_blank"
              sx={{
                textDecoration: "none",
                backgroundColor: "#ffffff",
                width: "250px",
                borderRadius: "10px",
                px: 7,
                py: 3,
              }}
            >
              <Box sx={{ width: "40px" }} component="img" src={mapaddressImg} />
              <Typography sx={{ fontFamily: "light,tahoma" }} color="#000">
                مشاهده نقشه
              </Typography>
            </Link>
          </Box>

          <Box
            minWidth="200px"
            maxWidth="350px"
            paddingX={10}
            paddingY={2}
            component="p"
            borderRadius="10px"
            backgroundColor="#ffffff"
            ml="auto"
          >
            میرداماد غربی، بین جردن و ولیعصر، پلاک 307
          </Box>
        </Box>
      </DialogComponent>
    </>
  );
}

export default ContactDialog;
