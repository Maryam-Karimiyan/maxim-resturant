// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#010101",
      contrastText: "#fff",
      menu:"#242e30"
    },
    secondary: {
      main: "#272727",
      contrastText: "#f1f1f1",
    },
    info: {
      main: "#64625a",
      contrastText: "#5fbeb1",
    },
  },
  typography: {
    fontFamily: "Tahoma, sans-serif",
  },
});

export default theme;
