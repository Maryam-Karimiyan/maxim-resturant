import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import { useState } from "react";
import MaximLogo from "../assets/logo.png";
import data from "../category.json";
import ButtonComponent from "./ButtonComponet";
import { useNavigate } from "react-router-dom";
// const drawerWidth = 80;
const drawerWidth = "fit-content";
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function SidebarMenue({type}) {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
 const items = data[type] || [];
 console.log(items);
 
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#010101",
            width: drawerWidth,
            direction: "rtl",
          },
        }}
      >
        <Divider />
        <List>
          {items.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ButtonComponent
                onClick={() => setSelected(index)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  width: "100%",
                  borderRight:
                    selected === index ? "3px solid #5fbeb1" : "none",
                }}
              >
                <Box component="img" src={text.icon} sx={{ maxWidth: 50 }} />
                <Typography fontSize={10} fontFamily="tahoma" color="#fff">
                  {text.title}
                </Typography>
              </ButtonComponent>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#242e30" }}
      >
        <Box
          width={100}
          component="img"
          src={MaximLogo}
          alt="logo"
          position="relative"
        />
        <ButtonComponent
          onClick={() => navigate("/")}
          sx={{
            fontSize: "1rem",
            fontFamily: "tahoma",
            top: "30px",
            right: 0,
            color: "#ffff",
            backgroundColor: "#010101",
            borderRadius: "20px",
            borderRadius: "25px 0 0 25px",
            position: "absolute",
          }}
        >
          بازگشت
        </ButtonComponent>

        <Typography fontFamily="tahoma" color="#fff" variant="h5" mb={2}>
          {selected !== null ? data.categories[selected].title : ""}
        </Typography>
      </Box>
    </Box>
  );
}
