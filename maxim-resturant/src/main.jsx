import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
const theme = createTheme({
  direction: "rtl", // برای راست‌چین (مناسب فارسی)
  typography: {
    fontFamily: "Vazir, Roboto, Arial", // فونت سفارشی
  },
  palette: {
    primary: {
      main: "#1976d2", // رنگ اصلی
    },
    secondary: {
      main: "#f50057", // رنگ دوم
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    {/* <CssBaseline/> */}
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
