import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
// import { Link } from "react-router-dom";
import DialogComponent from "./DialoComponent";
import instagramImg from "../assets/instagram.png";
import phoneImg from "../assets/phone.png";
import mapaddressImg from "../assets/mapaddress.png";
import CloseIcon from "@mui/icons-material/Close";

function ContactDialog({ open, onClose }) {
  const contactData = [
    {
      text: "maxim.caferestaurant",
      href: "https://instagram.com/maxim.caferestaurant",
      image: instagramImg,
    },
    { text: "02188880395", href: "tel:02188880395", image: phoneImg },
    {
      text: "مشاهده نقشه",
      href: "https://www.google.com/maps?q=35.76255755240792,51.41766858451759",
      image: mapaddressImg,
    },
  ];
  return (
    <>
      <DialogComponent
        CloseIcon={<CloseIcon sx={{ color: "#f1f1f1" }} />}
        open={open}
        onClose={onClose}
      >
        <Box>
          <Box
            sx={{
              maxWidth: "600px",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: {sm:"right",xs:"center"},
              alignItems:"center",
              gap: 2,
            }}
          >
            {contactData.map((item, index) => (
              <Link
                underline="none"
                href={item.href}
                target="_blank"
                key={index}
              >
                <Card
                  sx={{
                    width: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p:"10px 25px"
                  }}
                >
                  <Box component="img" src={item.image} maxWidth="30px" />
                  <CardContent>
                    <Typography variant="caption">{item.text}</Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
            <Typography variant="overline">

            میرداماد غربی، بین جردن و ولیعصر، پلاک 307
            </Typography>
          </Box>
        </Box>
      </DialogComponent>
    </>
  );
}

export default ContactDialog;
