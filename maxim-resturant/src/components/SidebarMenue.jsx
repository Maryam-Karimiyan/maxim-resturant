import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import MaximLogo from "../assets/logo.png";
import data from "../category.json";
import ButtonComponent from "./ButtonComponet";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { changeIndex } from "../redux/menueSlice";
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

export default function SidebarMenue({ type, children }) {
  const navigate = useNavigate();
  const items = data[type] || [];
  const menuIndex = useSelector((state) => state.menueIndex.activeItem);
  const dispatch = useDispatch();
  
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
                onClick={() => {
                  dispatch(changeIndex(index));
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  width: "100%",
                  borderRight:
                    menuIndex === index ? "3px solid #5fbeb1" : "none",
                }}
              >
                <Box component="img" src={text.icon} sx={{ maxWidth: 50 }} />
                <Typography fontSize={10} fontFamily="tahoma" color="#fff">
                  {text.name}
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
          onClick={() => {
            dispatch(changeIndex(null))
            navigate("/")}}
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
          {menuIndex !== null ? data[type][menuIndex].name : ""}
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px:{md:"200px"}
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
}
